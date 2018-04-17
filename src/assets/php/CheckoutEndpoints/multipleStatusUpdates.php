<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');
//basic output format, all data gets pushed into data[]

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];


if(!isset($_GET['id'], $_GET['status'])){
    die('id and status required');
}

$id = $_GET['id']; 
$id = json_decode($id, TRUE);
$status = $_GET['status'];


if($status === 'sold'){
    if(!isset($_GET['buyer_id'])){
        die("buyer_id required");
    }
    $buyer_id = $_GET['buyer_id'];
    require('updateOrderDetails.php');
}

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