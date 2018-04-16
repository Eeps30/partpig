<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');
//basic output format, all data gets pushed into data[]

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

if(!isset($_GET['id'])){
    $output['error'][] = 'id empty, adding default of 2';
    die('no ID given');
}
$id = $_GET['id']; 
$id = json_decode($id, TRUE);
if(count($id) === 1){
    $subQuery = $id[0];  
}
else{
    $subQuery = implode(" , ",$id); 
}

if(!isset($_GET['status'])){
    $status = 'incheckout';
    $output['error'][] = "status empty, adding defaults of $status";
}
else{
    $status = $_GET['status'];
}
$query = "UPDATE `part` SET `status` = '$status' WHERE `id` IN ($subQuery)"; 

$output['data'][] = "Query was $query";

$result = mysqli_query($conn, $query);
if($result){
    $output['success'] = true;
    $output['data'] = "part $subQuery status's updated to $status";
}
else{
    $output['error'][] = 'Error in database query';
}

$json_output = json_encode($output);
print($json_output);

?>