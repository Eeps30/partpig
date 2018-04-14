<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once('mysqlConnect.php');
require("sanitizeInput.php");
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

$ID = 82;



$fieldsToSanitize = ['part_name', 'description', 'category_id', 'part_condition', 'brand', 'make', 'model', 'year', 'seller_id', 'price_usd', 'part_number'];

$fields = [];
$subQuery = [];
forEach($fieldsToSanitize as $value){
    if(isset($request_data[$value])){
        $fields[$value] = sanitizeInput($request_data[$value]);
    }
}

forEach($fields as $key => $value){
	$subQuery[] = "$key = $value";
}
if(count($subQuery) < 1){
    die('no fields to edit');
}
$query =  "UPDATE `part` as p
            SET " . implode(",",$subQuery) . 
            " WHERE p.id = $ID";


            $output['data'][] = "request data is " . $request_data;
            $output['data'][] = "subquery is " . implode(",",$subQuery);
            $output['data'][] = "query is $query";
            
// $query =   "UPDATE `part` as p
//             SET
//              p.brand='',
//              p.part_name='', 
//              c.name='', 
//              p.make='', 
//              p.model='', 
//              p.year='', 
//              p.part_number='', 
//              p.price_usd='', 
//              p.description='', 
//              p.part_condition='', 
//              a.city='', 
//              a.state_abbr='', 
//              p.seller_id='',
//              u.user_name='' 
//             JOIN `category` AS c
//                 ON p.category_id = c.id 
//             JOIN `user` AS u
//                 ON  p.seller_id = u.billing_address_id
//             JOIN `address` AS a
//                 ON u.billing_address_id = a.id
//             WHERE p.id = $ID";

// $result = mysqli_query($conn, $query);

// if($result){
//     if(mysqli_num_rows($result)> 0){
//         while($row = mysqli_fetch_assoc($result)){

//             $row['images'] = $images;
//             $row['price'] = (float)$row['price'];

//             $output['data'][] = $row;
//         }
//     }
//     else{
//         $output['errors'][] = 'NO Data available';
//     }
//     $output['success'] = true;
// }
// else{
//     $output['errors'][] = 'Error in database query';
// }

$json_output = json_encode($output);
print($json_output);

?>