<?php
//blunt fix, will refactor cors when we upload to server
header("Access-Control-Allow-Origin: *");

require("../mysqlConnect.php");

$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$query = "SELECT id, name FROM `category`";

$result = mysqli_query($conn, $query);

if($result){
	
    while($row = mysqli_fetch_assoc($result)){
        $output['data'][] = $row;
    }
	$output['success'] = true;
}
else {
	$output['error'][] = "Error: " . mysqli_error($conn);
}

$json_output = json_encode($output);
print($json_output);

mysqli_close($conn);

?>