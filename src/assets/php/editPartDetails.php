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

$ID = $request_data['id'];

$fieldsToSanitize = ['part_name', 'description', 'brand', 'price_usd', 'part_number'];

$fields = [];
$subQuery = [];
forEach($fieldsToSanitize as $value){
    if(isset($request_data[$value])){
        $fields[$value] = sanitizeInput($request_data[$value]);
    }
}

forEach($fields as $key => $value){
	$subQuery[] = "$key = '$value'";
}
if(count($subQuery) < 1){
    $output['error'][] = "no fields to edit";
    die('no fields to edit');
}
$query =  "UPDATE `part` as p SET " . implode(" , ",$subQuery) . 
         " WHERE p.id = $ID";


            // $output['data'][] = "request data is " . $request_data;
            // $output['data'][] = "subquery is " . implode(",",$subQuery);
            // $output['data'][] = "query is $query";
            

$result = mysqli_query($conn, $query);

if($result){
    $output['data'][] = "part with id $id successfully edited";
    $output['success'] = true;
}
else{
    $output['error'][] = 'Error in database update query';
}

$json_output = json_encode($output);
print($json_output);

?>