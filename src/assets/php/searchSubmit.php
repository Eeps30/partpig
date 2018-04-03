<?php
require_once('mysqlConnect.php');
if(isset($_POST['make'])){
    if(!empty($_POST['make'])){
        $make = $_POST['make'];
    }
    else{
        $output['error'][] = 'SET THE MAKE';
        die;
    }
}
else{
    $make = 'Toyota';
}
$query =  "SELECT * FROM `part` AS p WHERE p.make='$make'";
        
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