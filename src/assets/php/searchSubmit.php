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
                  p.part_name, 
                  c.name AS category, 
                  p.make, 
                  p.model, 
                  p.year,                               
                  p.part_number, 
                  p.price_usd, 
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
                )
            WHERE ";

$fieldsToCheck = ['make', 'model', 'year'];  

$subQuery[] = "(p.status ='available' OR p.status='incart')";

if(isset($_GET['keyword'])){
    $keyword = $_GET['keyword'];

    $subQuery[] = "`brand` LIKE '%$keyword%'
    OR `part_name` LIKE '%$keyword%'  
    OR `make` LIKE '%$keyword%' 
    OR `model` LIKE '%$keyword%'
    OR `description` LIKE '%$keyword%'
    OR `part_number` LIKE '%$keyword%'
    OR `year` LIKE '%$keyword%'
    OR `price_usd` LIKE '%$keyword%'";
}
// if(isset($_GET['make']) || isset($_GET['model']) || isset($_GET['year']))
else{
    forEach($fieldsToCheck as $value){
        if(!empty($_GET[$value])){
            $subQuery[] = " $value = '{$_GET[$value]}'";
        }
    }
}
// else{
//     die('no field to check');
// }

$query .=  implode(" AND ",$subQuery);
    
$result = mysqli_query($conn, $query);
// make a display object that we later add to each search result
$display = new stdClass();
$display->brand = 'true';
$display->price_usd = 'true';

if($result){
    if(mysqli_num_rows($result)> 0){
        while($row = mysqli_fetch_assoc($result)){
            $row['images'] = array($row['images']); 
            $row['display'] = $display;
            $row['price_usd'] = (float)$row['price_usd'];
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