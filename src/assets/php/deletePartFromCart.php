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


// if(!isset($_GET['part_id'])){
//     $output['error'][] = 'Error: user id not specified';
// }
// else{
//     $part_id = $_GET['part_id'];  
// }

// $status = 'available';

// $query = "UPDATE `part` 
//           SET `status` = '$status' 
//           WHERE `part`.`id` = $part_id"; 

// $result = mysqli_query($conn, $query);
// if($result){
//     $output['success'] = true;
//     $output['data'] = "part '$part_id' status updated to $status";
// }
// else{
//     $output['error'][] = 'Error in database query, probably problem with enum letters';
// }

// $json_output = json_encode($output);
// print($json_output);

$buyer_id = $_GET['user_id'];
$part_id = $_GET['part_id'];

$query2 = "DELETE FROM `shoppingcart`
           WHERE `shoppingcart`.`buyer_id` = '$buyer_id'
           AND `shoppingcart`.`part_id` = '$part_id';
           ";

$result2 = mysqli_query($conn, $query2);
$rows_affected = mysqli_affected_rows($conn);
if($result2){
    echo "Successfully removed records from table shoppingcart. Total rows affected: ", $rows_affected .".";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>