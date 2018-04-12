<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$_GET['id'] = 2;
if(!isset($_GET['id'])){
    $output['error'][] = 'Error: user id not specified';
}
else{
    $id = $_GET['id'];  
}

$status = 'available';

$query = "UPDATE `part` 
          SET `status` = '$status' 
          WHERE `part`.`id` = $id"; 

$result = mysqli_query($conn, $query);
if($result){
    $output['success'] = true;
    $output['data'] = "part '$id' status updated to $status";
}
else{
    $output['error'][] = 'Error in database query, probably problem with enum letters';
}

$json_output = json_encode($output);
print($json_output);
?>