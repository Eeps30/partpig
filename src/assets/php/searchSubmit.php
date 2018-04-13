<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlConnect.php');
//basic output format, all data gets pushed into data[]
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

// default query
$query =  "SELECT p.id, 
                  p.brand, 
                  p.part_name AS title, 
                  c.name AS category, 
                  p.make, 
                  p.model, 
                  p.year,                               
                  p.part_number AS partNumber, 
                  p.price_usd AS price, 
                  i.url AS images
            FROM `part` AS p
            JOIN `category` AS c
                ON p.category_id = c.id 
            JOIN `image` AS i 
                ON i.id=
                (
                    SELECT MIN(im.id) 
                    FROM `image` as im 
                    WHERE im.part_id=p.id
                )";

$fieldsToCheck = ['make', 'model', 'year'];  //changed name from partsToCheck
$subQuery = [];
$subQuery[] = "p.status ='available' OR p.status='incart'";
forEach($fieldsToCheck as $value){
    if(!empty($_GET[$value])){
        $subQuery[] = " $value = '{$_GET[$value]}'";
    }
}

if(count($subQuery)>0){
	$query .= " WHERE ". implode(" AND ",$subQuery);
}

$result = mysqli_query($conn, $query);
// make a display object that we later add to each search result
$display = new stdClass();
$display->brand = 'true';
$display->price = 'true';

if($result){
    if(mysqli_num_rows($result)> 0){
        while($row = mysqli_fetch_assoc($result)){
            $row['images'] = array($row['images']); 
            $row['display'] = $display;
            $row['price'] = (float)$row['price'];
            $row['year'] = (int)$row['year'];
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