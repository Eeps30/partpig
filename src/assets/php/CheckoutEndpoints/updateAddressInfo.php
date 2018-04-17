<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');

//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

if(!isset($request_data['user_id'], $request_data['shipping'], $request_data['billing'])){
    die('send a shipping and billing address');
}

die('not finished yet');

$query = "UPDATE `part` SET `status` = '$status' WHERE `id` IN (" .  implode(" , ",$id) . ")"; 


$result = mysqli_query($conn, $query);
if($result){
    $output['success'] = true;
    $output['data'][] = "part" . implode(" , ",$id). "status's updated to $status";
}
else{
    $output['error'][] = 'Error in database query';
}

$json_output = json_encode($output);
print($json_output);

?>