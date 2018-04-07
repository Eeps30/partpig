<?php

require("mysql_conn.php");

// partTitle: '',
//             partNumber: '',
//             fitment: '',
//             firstImage: '',
//             condition: '',
//             conditionBrief: '',
//             username: '',
//             password: '',
//             brand: ''

$name = $_POST['partTitle'];
$condition = $_POST['condition'];
$username = $_POST['username'];
$password =
$query = "INSERT INTO `students` SET `name` = '$name', `course` = '$course', `grade` = '$grade'";

header("Access-Control-Allow-Origin: *");
require("mysqlConnect.php");
require("sanitizeInput.php");

//only do filter_var for email and phone
//use array to list fields

$part_name = filter_var(sanitizeInput(' 2nd test/<?\\\<Post>  '), FILTER_SANITIZE_STRING);
$description = sanitizeInput('    ');
$description = $description ?: 'Description was empty';
$part_condition = filter_var(sanitizeInput('1 -- Heavily used'), FILTER_SANITIZE_STRING);
$status = filter_var(sanitizeInput('For sale'), FILTER_SANITIZE_STRING);
$brand = filter_var(sanitizeInput('testBrand'), FILTER_SANITIZE_STRING);
$make = filter_var(sanitizeInput('testMake'), FILTER_SANITIZE_STRING);
$model = filter_var(sanitizeInput('testModel'), FILTER_SANITIZE_STRING);
$year = filter_var(sanitizeInput('2018'), FILTER_SANITIZE_STRING);
$seller_id = filter_var(sanitizeInput(1), FILTER_SANITIZE_STRING);
$price_usd = sanitizeInput(999);
$listed_date = sanitizeInput(date("Y-m-d", time()));

$query = "INSERT INTO `part` 
			SET `part_name` = '$part_name', `description` = '$description', `part_condition`='$part_condition',  `brand` = '$brand', `make`='$make', `model`='$model', `year`='$year', `seller_id`='$seller_id', `price_usd`='$price_usd', `listed_date`='$listed_date'";
$result = mysqli_query($conn, $query);
$rows_affected = mysqli_affected_rows($conn);
$data = json_encode($result);
if($result){
	print($data);

	echo "New record created successfully. Total rows affected: ", $rows_affected .".";
} else {
	echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>