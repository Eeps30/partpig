<?php
 header("Access-Control-Allow-Origin: *");
 header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
 header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
 
 require_once('../mysqlConnect.php');
 
 $entityBody = file_get_contents('php://input');
 $request_data = json_decode($entityBody, true);
 
 $output = [
     'success'=> false,
     'error' => [],
     'data' => []
 ];
 if(empty($request_data['username']) OR empty($request_data['password'])  OR empty($request_data['email'])){
     die("user, password, and email required");
}
    
$request_data['user_name'] = $request_data['username'];
$request_data['password'] = sha1($request_data['password']);
if(!filter_var($request_data['email'], FILTER_VALIDATE_EMAIL)){
    die("invalid email");
} 
$testQuery = "SELECT * FROM `user` WHERE user_name=?";
    
$testStmt = $conn->prepare($testQuery);
$testStmt->bind_param("s", $request_data['user_name']);
$testStmt->execute();
$testResult = $testStmt->get_result();
if($testResult->num_rows){
    $output['duplicate'][] = "User already exists";
    $json_output = json_encode($output);
    print($json_output);
    die();
}  
$testStmt->close();


$userFields = ['user_name', 'password', 'email', 'first_name', 'last_name', 'billing_address_id', 'shipping_address_id'];
$queryValues = [];
$params = [];
$letterString = "";

forEach($userFields as $key => $value){
    if(empty($request_data[$value])){
        $params[] = 1;   
    }
    else{
        $params[] = $request_data[$value];
    }
    $letterString .= "s";
    $queryValues[] = "?";
}

$query = "INSERT INTO `user` (" . implode(' , ', $userFields) . ")
VALUES (" . implode(' , ', $queryValues) . ")";

$stmt = $conn->prepare($query);
$stmt->bind_param($letterString, ...$params);
$stmt->execute();
$result = $stmt->get_result();

if($stmt->affected_rows === 1){
    $output['success'] = true;
    $output['data'][] = "new user created";
}
else{
    preg_match_all('/(\S[^:]+): (\d+)/', $conn->info, $matches); 
    $infoArr = array_combine ($matches[1], $matches[2]);
    $output['error'][] = $infoArr;
    $output['error'][] = "problem creating new user";
}
$stmt->close();

unset($password);
$json_output = json_encode($output);
print($json_output);
?>
