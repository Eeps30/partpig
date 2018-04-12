<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];
$_GET['seller_id']= 2;

// p.id AS category ???
$query =  "SELECT p.id, 
                  p.brand, 
                  p.seller_id As seller,
                  p.part_name AS title, 
                  p.id AS category, 
                  p.make, 
                  p.model, 
                  p.year,                               
                  p.part_number AS partNumber, 
                  p.price_usd AS price, 
                  i.url AS images
            FROM `part` AS p 
            JOIN `image` AS i 
                ON i.id= (
                    SELECT MIN(im.id) 
                    FROM `image` as im 
                    WHERE im.part_id=p.id
                ) 
                AND p.seller_id = '{$_GET['seller_id']}'";   

$result = mysqli_query($conn, $query);
// make a display object that we later add to each search result

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