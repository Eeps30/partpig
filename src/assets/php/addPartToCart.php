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

$status = 'incart';

$query1 = "UPDATE `part` 
           SET `status` = '$status' 
           WHERE `part`.`id` = $id"; 

$result1 = mysqli_query($conn, $query1);
if($result1){
    $output['success'] = true;
    $output['data'][] = "part '$id' status updated to $status";
}
else{
    $output['error'][] = 'Error in database query, probably problem with enum letters';
}

$query2 = "INSERT INTO `order_meta`
            
            
        ";


$json_output = json_encode($output);
print($json_output);
?>