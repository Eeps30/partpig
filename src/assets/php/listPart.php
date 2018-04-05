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
$result = mysqli_query($conn, $query);
$rows_affected = mysqli_affected_rows($conn);
$data = json_encode($result);
if($result){
	print($data);
	// echo "New record created successfully";
} else {
	echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>