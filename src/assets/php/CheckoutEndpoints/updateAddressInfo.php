<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');

//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

if(!isset($request_data['user_id'], $request_data['shipping'], $request_data['billing'])){
    die('send a user_id, shipping and billing address');
}
$user_id = $request_data['user_id'];
unset($request_data['user_id']);
$shipping = $request_data['shipping'];
$billing = $request_data['billing'];
$addressFieldsToCheck = ['company_name', 'street_address', 'apt_suite', 'city', 'state', 'state_abbr', 'zipcode'];
foreach($request_data as $key => $val){
    $subquery = [];
    foreach($val as $item => $itemValue){
        if(in_array($item, $addressFieldsToCheck)){
            $subquery[] = "`address`.$item = '$itemValue'";
        }
    }
    $query = "UPDATE `address`
        SET " . implode(' , ', $subquery) . "
        WHERE `address`.`id` =(
        SELECT u." . $key ."_address_id
        FROM `user` AS u
        WHERE u.id = $user_id
        )";
        
        $result = mysqli_query($conn, $query);
        if($result){
            $output['success'] = true;
            $output['data'][] = "1 address table updated for $user_id";
        }
        else{
            $output['success'] = false;
            $output['error'][] = 'Error in database query';
        }
        unset($subquery);
}

$json_output = json_encode($output);
print($json_output);
?>