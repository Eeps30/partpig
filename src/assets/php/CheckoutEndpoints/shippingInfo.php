<?php
header("Access-Control-Allow-Origin: *");
require_once('../mysqlConnect.php');
//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$user_id = $_GET['user_id'];

//hard coded for testing =========
// $user_id = 3;
//==========

$query =  "SELECT u.id AS user_id,
                  u.user_name, 
                  u.first_name, 
                  u.last_name, 
                  u.email,
                  u.phone_number, 
                  a.street,
                  a.unit_number,
                  a.city,
                  a.state_abbr,
                  a.zipcode,
                  a.country
            FROM `user` AS u
            JOIN `address` AS a
                ON u.id = $user_id AND u.shipping_address_id = a.id
            ";

$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)> 0){
        while($row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        }
    }
    else{
        $output['errors'][] = 'NO Data available';
    }
    $output['success'] = true;
}
else{
    $output['errors'][] = 'Error in database query';
}

$json_output = json_encode($output);
print($json_output);
?>