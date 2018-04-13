<?php
require './vendor/autoload.php';
require('./imageUpload/awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);


function handleDifferentImageTypes($imageURI){
    global $ext;
    if(preg_match('/data:image\/png/', $imageURI)){
        echo "match png";   
        $imageURI = str_replace('data:image/png;base64,', '', $imageURI);
        $ext = 'png';
       }
    else if(preg_match('/data:image\/jpeg/', $imageURI)){
        echo "match jpeg";  
        $imageURI = str_replace('data:image/jpeg;base64,', '', $imageURI); 
        $ext = 'jpeg';
    }
    else if(preg_match('/data:image\/jpg/', $imageURI)){
        echo "match jpg";  
        $imageURI = str_replace('data:image/jpg;base64,', '', $imageURI); 
        $ext = 'jpg';
    }
    else{
        die("invalid file type");
    }
    return $imageURI;
}


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

define('UPLOAD_DIR', './imageUpload/tempUploads/');
$img = $request_data['images'][0];
$ext = '';

$img = handleDifferentImageTypes($img);
$data = base64_decode($img);
$tempFilePath = UPLOAD_DIR.$fileName.$ext;
$success = file_put_contents($tempFilePath,$data);

if(!$success){
die('unable to save file');
}

 $fileContents = file_get_contents("$tempFilePath");

$s3Client = $sdk->createS3();
try{
    $result =  $s3Client->putObject([
        'Bucket' => 'teampartpig',
        'Key'    => "$filePath/$fileName" ,
        'Body'   => fopen($tempFilePath, 'r'),
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

require_once('./imageUpload/deleteFileFromTemp.php');
$imageUrl = $result['ObjectURL'];


//if you need json output
// $json_output = json_encode($imageUrl);
// print($json_output);
?>