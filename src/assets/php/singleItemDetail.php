<?php

header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');

$ID = $_GET['id'];
$imgQuery =  "SELECT url  FROM `image` WHERE part_id='$ID'";
$imgResult =  mysqli_query($conn, $imgQuery);

if($imgResult){
    if(mysqli_num_rows($imgResult)> 0){
        while($row = mysqli_fetch_assoc($imgResult)){
           $images[] = $row['url'];
        }
    }
    else{
        $output['errors'][] = 'NO image available';
    }
    $output['success'] = true;
}
else{
    $output['errors'][] = 'Error in image database query';
}

$query =  "SELECT
             p.id,
             p.brand,
             p.part_name, 
             c.name AS category, 
             p.make, 
             p.model, 
             p.year, 
             p.part_number, 
             p.price_usd, 
             p.description, 
             co.part_condition, 
             a.city AS 'city', 
             a.state_abbr AS 'state', 
             p.seller_id AS 'seller_id',
             u.user_name AS 'seller' 
            FROM `part` AS p
            JOIN `condition` AS co
                ON p.part_condition = co.id
            JOIN `category` AS c
                ON p.category_id = c.id 
            JOIN `user` AS u
                ON  p.seller_id = u.billing_address_id
            JOIN `address` AS a
                ON u.billing_address_id = a.id
            WHERE p.id = $ID";

$result = mysqli_query($conn, $query);
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];
if($result){
    if(mysqli_num_rows($result)> 0){
        while($row = mysqli_fetch_assoc($result)){

            $row['images'] = $images;
            $row['price_usd'] = (float)$row['price_usd'];

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