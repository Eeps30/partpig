<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
$ID = 4;
$query =  "SELECT `part_data` FROM `part` AS p WHERE `id` = '$ID'";
        
$result = mysqli_query($conn, $query);
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];
if($result){
    if(mysqli_num_rows($result)> 0){
        while($row = mysqli_fetch_assoc($result)){
            $row['display'] = 'true';
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