<?php
header("Access-Control-Allow-Origin: *");
require("mysqlConnect.php");
require("sanitizeInput.php");

//only do filter_var for email and phone

//hard-coded test $_POST data
$_POST['part_name'] = ' 3rd test/<?\\\<Post>  ';
$_POST['description'] = '    ';
$_POST['part_condition'] = '1 -- Heavily used';
$_POST['status'] = 'For sale';
$_POST['brand'] = 'testBrand';
$_POST['make'] = 'testMake';
$_POST['model'] = 'testModel';
$_POST['year'] = '2018';
$_POST['seller_id'] = 1;
$_POST['price_usd'] = 999;
$_POST['listed_date'] = date("Y-m-d", time());
// remove above content for frontEnd testing

$fieldsToSanitize = ['part_name', 'description', 'part_condition', 'brand', 'make', 'model', 'year', 'seller_id', 'price_usd', 'listed_date'];

$fields = [];
forEach($fieldsToSanitize as $value){
	 $fields[$value] = sanitizeInput($_POST[$value]);
}
$fields['description'] = $fields['description'] ?: 'There is no description for this part.';

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
$result = mysqli_query($conn, $query);
$rows_affected = mysqli_affected_rows($conn);
$data = json_encode($result);
if($result){
	echo "New record created successfully. Total rows affected: ", $rows_affected .".";
} else {
	echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>