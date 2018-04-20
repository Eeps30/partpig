<?php
//this file is being required by multipleStatusUpdates.php
$uniqid = uniqid();
$orderQuery = "INSERT INTO `order_details` (`order_tracker`, `buyer_id`, `seller_id`, `part_id`, `cost`, `status`) 
               SELECT '$uniqid', '$buyer_id', p.seller_id, p.id, p.price_usd,  'Transaction complete' 
               FROM `part` AS p
               WHERE p.id
               IN (" . implode(" , ", $id) . ")";


$orderResult = mysqli_query($conn, $orderQuery);
if(!$orderResult){
    die('could not process transaction');
}
else{
    $output['data'][] = "transaction processed for " . implode(" , ", $id);
    $output['data']['order_number'] = $uniqid;
}

$cartQuery = "DELETE FROM `shoppingcart` WHERE buyer_id='$buyer_id'";
$cartResult = mysqli_query($conn, $cartQuery);
if(!$cartResult){
    die('could not update cart');
}
else{
    $output['data'][] = "cart updated for buyer with id of " . $buyer_id;
}
?>