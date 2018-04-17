<?php
//this file is being required by multipleStatusUpdates.php

$orderQuery = "INSERT INTO `order_details` (`buyer_id`, `seller_id`, `part_id`, `cost`, `status`) 
               SELECT $buyer_id, p.seller_id, p.id, p.price_usd,  'Transaction complete' 
               FROM `part` AS p
               WHERE p.id
               IN (" . implode(" , ", $id) . ")";


$orderResult = mysqli_query($conn, $orderQuery);
if(!$orderResult){
    die('could not process transaction');
}
else{
    $output['data'][] = "transaction processed for " . implode(" , ", $id);
}

?>