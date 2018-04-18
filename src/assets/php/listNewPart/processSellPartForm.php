<?php
//blunt fix, will refactor this when we upload to server
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require("../mysqlConnect.php");
require("../sanitizeInput.php");

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

//only do filter_var for email and phone
require_once('./addImagesToS3.php');
// hard-coded test $_POST data **********************************************
// $_POST['part_name'] = ' 3rd test/<?\\\<Post>  ';
// $_POST['description'] = '    ';
// $_POST['part_condition'] = '1';
// $_POST['status'] = 'For sale';
// $_POST['brand'] = 'testBrand';
// $_POST['make'] = 'testMake';
// $_POST['model'] = 'testModel';
// $_POST['year'] = '2018';
// $_POST['seller_id'] = 1;
// $_POST['price_usd'] = 999;
// $_POST['listed_date'] = date("Y-m-d", time());
// $_POST['part_number'] = 'part#999';


// remove above content for frontEnd testing *********************************
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];



$fieldsToSanitize = ['part_name', 'description', 'category_id', 'part_condition', 'brand', 'make', 'model', 'year', 'seller_id', 'price_usd', 'part_number'];

$fields = [];
forEach($fieldsToSanitize as $value){
	 $fields[$value] = sanitizeInput($request_data[$value]);
}
$fields['description'] = $fields['description'] ?: 'There is no description for this part.';
$fields['part_condition'] = (int)$fields['part_condition'];
$fields['category_id'] = (int)$fields['category_id'] ?: 8;
$fields['year'] = (int)$fields['year'];
$fields['price_usd'] = (float)$fields['price_usd'];
$fields['seller_id'] = (int)$fields['seller_id'];

$query = "INSERT INTO `part` "; 
$tableFields = '';
$tableValues = '';

forEach($fields as $key => $value){
	$tableFields .= $key . ", ";
	$tableValues .= "'" . $value . "', ";
}

$tableFields = "(" . substr($tableFields, 0, -2) . ")";
$tableValues = "VALUES (" . substr($tableValues, 0, -2) . ")";

$query .= $tableFields . $tableValues;
// echo "The Query was: ".$query;
// error_log("The Query was: ".$query , 0);
$result = mysqli_query($conn, $query);
if($result){
	$last_id = mysqli_insert_id($conn);
	$imgSubQuery = [];
	
	foreach($imageUrl as $image){
		$imgSubQuery[] = "(NULL, NULL, '$image', NULL, '$last_id')";
	}
	
	$imgQuery = "INSERT INTO `image` (`id`, `name`, `url`, `alt`, `part_id`) VALUES " . implode(" , ", $imgSubQuery);

	$imgResult = mysqli_query($conn, $imgQuery);
	
	$output['data'][] = "last Id was $last_id";
	$output['data'][] = "The Query was: ".$imgQuery ." result was" .$imgResult;
	if(!$imgResult){
		$output['error'] = mysqli_error($conn);
		die("image couldn't upload to image table");
	}
	
	$rows_affected = mysqli_affected_rows($conn);
	$output['data'][] = "New record created successfully. Total rows affected: ". $rows_affected ."." . " Last inserted ID is: ". $last_id . ".";
	$output['success'] = true;
}
else {
	$output['error'][] = "Error: " . mysqli_error($conn);
}

$json_output = json_encode($output);
print($json_output);

mysqli_close($conn);
?>