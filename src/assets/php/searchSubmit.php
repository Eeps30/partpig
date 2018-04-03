<?php
require_once('mysqlConnect.php');
$query =  "SELECT j.make, j.title, j.images from `jsonparts` AS j";
        
$result = mysqli_query($conn, $query);
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];
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