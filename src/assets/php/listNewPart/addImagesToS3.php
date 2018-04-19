<?php
require '../vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

if(empty($_POST['username'])){
    $_POST['username'] = 'user2';
}
if(empty($request_data['images'][0])){
    die('please upload an image');
}

$GLOBALS['ext'] = '';
$day = date('Y-m-d');
$username = $_POST['username'];

// compose the file directory path ex: images/2018-4-12/user1/
$filePath = "images/$day/$username";
    

require('s3Functions.php');

define('UPLOAD_DIR', './tempUploads/');
$imageUrl = [];
$index = 0;

foreach($request_data['images'] as $singleImage){
    $image = $singleImage['imagePreviewUrl'];
    $imageUrl[] = saveAndUploadImageToAws($image, $filePath, $index);
    $index++;
}

?>