<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');

$_POST['id'] = 1;

$ID = $_POST['id'];
$query =  "SELECT
             p.description AS 'description', 
             p.part_condition AS 'condition', 
             a.city AS 'city', 
             a.state_abbr AS 'state', 
             p.seller_id AS 'seller' 
            FROM `part` AS p 
            JOIN `user` AS u
                ON  p.seller_id = u.billing_address_id
            JOIN `address` AS a
                ON u.billing_address_id = a.id
            WHERE p.id = 1";
        
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