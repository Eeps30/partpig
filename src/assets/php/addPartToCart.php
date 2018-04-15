<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];


if(!isset($_GET['part_id'])){
    $output['error'][] = 'Error: user id not specified';
}
else{
    $part_id = $_GET['part_id'];  
}

$buyer_id = (int)$_GET['user_id'];
$part_id = (int)$_GET['part_id'];

$count = 1;

$order_status = 'Order received';
$shipping_charge = 9.99;
error_log('buyer_id: '.$buyer_id);

$query = "INSERT INTO `shoppingcart`
           (buyer_id, part_id, count, status, shipping_charge)
           Values (
             '$buyer_id', '$part_id', '$count', '$order_status', '$shipping_charge'
           )";

$result = mysqli_query($conn, $query);
$rows_affected = mysqli_affected_rows($conn);

if($result){
    $last_id = mysqli_insert_id($conn);
    echo "New record created successfully in shoppingcart. Total rows affected: ", $rows_affected ."." . " Last inserted ID is: ". $last_id . ".";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>