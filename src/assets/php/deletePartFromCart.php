<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$buyer_id = (int)$_GET['user_id'];


$query = "DELETE FROM `order_meta`
           WHERE `order_meta`.`buyer_id` = '$buyer_id'";

$part_id = $_GET['part_id'];

$query = "DELETE FROM `shoppingcart`
           WHERE `shoppingcart`.`buyer_id` = '$buyer_id'
           AND `shoppingcart`.`part_id` = '$part_id';

           ";

$result = mysqli_query($conn, $query);
$rows_affected = mysqli_affected_rows($conn);
if($result){

    echo "Successfully removed records from table shoppingcart. Total rows affected: ", $rows_affected .".";

} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>