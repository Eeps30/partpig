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

 if(empty($request_data['first_name']) OR empty($request_data['last_name'])){
     die("names required");
}
    

$query =  "UPDATE `user` as u SET (first_name, middle_name, last_name, phone_number) VALUE(?, ?, ?, ?) WHERE p.id = 20";       

//prepared statement for query
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $request_data['first_name'], $request_data['middle_name'],  $request_data['last_number'], $request_data['phone_number']);
$stmt->execute();


if($stmt->affected_rows > 0){
    $output['success'] = true;
    $output['data'][] = "name updated successfully";
} 
else{
    $output['error'][] = "could not update name";

} 
$testStmt->close();

$json_output = json_encode($output);
print($json_output);
?>
