<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]

// $entityBody = file_get_contents('php://input');
// $request_data = json_decode($entityBody, true);
// $_GET = $request_data['objName'];

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

// $status = 'incart';

// $query1 = "UPDATE `part` 
//            SET `status` = '$status' 
//            WHERE `part`.`id` = '$part_id'"; 

// $result1 = mysqli_query($conn, $query1);
// if($result1){
//     $output['success'] = true;
//     $output['data'][] = "part '$part_id' status updated to $status";
// }
// else{
//     $output['error'][] = 'Error in database query, probably problem with enum letters';
// }

// $json_output = json_encode($output);
// print($json_output);

$buyer_id = $_GET['user_id'];
$part_id = $_GET['part_id'];
$count = 2;
$price = 55;
$order_status = 'Order received';
$shipping_charge = 9.99;
error_log('buyer_id: '.$buyer_id);

$query2 = "INSERT INTO `shoppingcart`
           (buyer_id, part_id, count, price, tax, status, shipping_charge)
           Values (
             '$buyer_id', '$part_id', '$count', '$price', ('$count'*'$price'*0.075), '$order_status', '$shipping_charge'
           )";

$result2 = mysqli_query($conn, $query2);
$rows_affected = mysqli_affected_rows($conn);
if($result2){
    $last_id = mysqli_insert_id($conn);
    echo "New record created successfully in shoppingcart. Total rows affected: ", $rows_affected ."." . " Last inserted ID is: ". $last_id . ".";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>