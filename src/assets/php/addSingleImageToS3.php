<?php
require './vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

//defaults if post doesn't have user or image
if(empty($_POST['username'])){
    $_POST['username'] = 'user1';
}
if(empty($request_data['images'][0])){
    die('please upload an image');
}

$day = date('Y-m-d');
$username = $_POST['username'];
$image = $request_data['images'][0];
$filePath = "images/$day/$username";
$previousFileName = 'listedImageName';
$fileName = $previousFileName . time();

define('UPLOAD_DIR', './uploads/');
$img = $request_data['images'][0];
$img = str_replace('data:image/png;base64,', '', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR.$fileName.'.png';
$success = file_put_contents($file,$data);

if(!$success){
die('unable to save file');
}



$s3Client = $sdk->createS3();
try{
    $result =  $s3Client->putObject([
        'Bucket' => 'teampartpig',
        'Key'    => "$filePath/$fileName" ,
        'Body'   => fopen($file, 'r'),
        'ACL'    => 'public-read',
        ]);

    // list files in bucket
    //  $result =  $s3Client->listObjects([
    //      'Bucket' => 'teampartpig'
    //  ]);
    //     print_r($result);

    }
 catch (Aws\S3\Exception\S3Exception $e) {
    echo "There was an error uploading the file.\n";
}


$imageUrl = $result['ObjectURL'];


//if you need json output
// $json_output = json_encode($imageUrl);
// print($json_output);
?>