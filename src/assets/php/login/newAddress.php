<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');

//this endpoint is ready for the front end to call and add a new address for a registered user.


//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

if(!isset($request_data['user_id']) AND ($isset($request_data['shipping']) OR $isset($request_data['shipping']))){
    die('send a user_id, and shipping or billing address');
}
$user_id = $request_data['user_id'];
unset($request_data['user_id']);
$shipping = $request_data['shipping'];

if(!empty($request_data['billing'])){
   $billing = $request_data['billing'];
}

$addressTypes = ['shipping', 'billing'];
$addressFieldsToCheck = ['company_name', 'street_address', 'apt_suite', 'city', 'state', 'state_abbr', 'zipcode'];

foreach($request_data as $key => $val){
    if(!in_array($key, $addressTypes)){
        continue;
    }
    $subqueryItems = [];
    $subqueryValues = [];
    foreach($val as $item => $itemValue){
        if(in_array($item, $addressFieldsToCheck)){
            $subqueryItems[] = "$item";
            $subqueryValues[] = "'$itemValue'";
        }
    }
    $query = "INSERT INTO `address` (" . implode(' , ', $subqueryItems) . ")
        VALUES (" . implode(' , ', $subqueryValues) . ")";
      
        $result = mysqli_query($conn, $query);
        $last_id = mysqli_insert_id($conn);

        if($result){
            $output['success'] = true;
            $output['data'][] = "1 address table updated for $user_id";
        }
        else{
            $output['success'] = false;
            $output['error'][] = 'Error in inserting address';
            break;
        }

    $userQuery = "UPDATE `user` SET $key" ."_address_id = $last_id WHERE `user`.id = $user_id";
    $userResult = mysqli_query($conn, $userQuery);
        if($userResult){
            $output['data'][] = "Updated user $user_id info with address table at $last_id";
        }
        else{
            $output['success'] = false;
            $output['error'][] = 'error in updating user table';
            break;
        }
        unset($subqueryItems);
        unset($subqueryValues);
}

$json_output = json_encode($output);
print($json_output);
?>