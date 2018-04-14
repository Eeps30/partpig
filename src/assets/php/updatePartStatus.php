<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

if(!isset($_GET['id'])){
    $id = '84';
    $output['error'][] = 'id empty, adding default of $id';
}
else{
    $id = $_GET['id'];  
}
if(!isset($_GET['status'])){
    $status = 'draft';
    $output['error'][] = "status empty, adding defaults of $status";
}
else{
    $status = $_GET['status'];
}

$query = "UPDATE `part` SET `status` = '$status' WHERE `part`.`id` = $id"; 
$result = mysqli_query($conn, $query);
if($result){
    $output['success'] = true;
    $output['data'] = "part $id status updated to $status";
}
else{
    $output['error'][] = 'Error in database query, probably problem with enum letters';
}

$json_output = json_encode($output);
print($json_output);

?>