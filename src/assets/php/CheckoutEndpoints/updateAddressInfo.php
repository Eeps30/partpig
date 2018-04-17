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
print_r($request_data);

if(!isset($request_data['user_id'], $request_data['shipping'], $request_data['billing'])){
    die('send a user_id, shipping and billing address');
}
$user_id = $request_data['user_id'];
unset($request_data['user_id']);
$shipping = $request_data['shipping'];
$billing = $request_data['billing'];

foreach($request_data as $key => $val){
    $query = "UPDATE `address`
        SET `address`.`company_name` = '{$val['company_name']}',
        `address`.`street_address` = '{$val['street_address']}',
        `address`.`apt_suite` = '{$val['apt_suite']}',
        `address`.`city` = '{$val['city']}',
        `address`.`state` = '{$val['state']}',
        `address`.`state_abbr` = '{$val['state_abbr']}',
        `address`.`zipcode` = '{$val['zipcode']}'
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
}


$json_output = json_encode($output);
print($json_output);

?>