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
$_GET['buyer_id'] = 2;

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

$buyer_id = $_GET['buyer_id'];

$query2 = "DELETE FROM `order_meta`
           WHERE `order_meta`.`buyer_id` = '$buyer_id'
           ";

$result2 = mysqli_query($conn, $query2);
$rows_affected = mysqli_affected_rows($conn);
if($result2){
    $last_id = mysqli_insert_id($conn);
    echo "New record created successfully in order_meta. Total rows affected: ", $rows_affected ."." . " Last inserted ID is: ". $last_id . ".";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>