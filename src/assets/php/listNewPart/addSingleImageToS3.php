<?php
require '../vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

//
function prepImageTypesAndExtForDecoding($imageURI){
    global $ext;
    if(preg_match('/data:image\/png/', $imageURI)){
        $imageURI = str_replace('data:image/png;base64,', '', $imageURI);
        $ext = 'png';
       }
    else if(preg_match('/data:image\/jpeg/', $imageURI)){
        $imageURI = str_replace('data:image/jpeg;base64,', '', $imageURI); 
        $ext = 'jpeg';
    }
    else if(preg_match('/data:image\/jpg/', $imageURI)){
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
    $_POST['username'] = 'user2';
}
if(empty($request_data['images'][0])){
    die('Data not sent to database. Please upload an image');
}


$day = date('Y-m-d');
$username = $_POST['username'];
$image = $request_data['images'][0];

// compose the file directory path ex: images/2018-4-12/user1/
$filePath = "images/$day/$username";
//grab listed file name later, this is a placeholder
$previousFileName = 'AWS_IMG_';

//compose the name with prev name and time ex: AWS_IMG_1523578198
$fileName = $previousFileName . time();

//decode image and save it locally
define('UPLOAD_DIR', './tempUploads/');
$img = $request_data['images'][0];

$ext = '';

$img = prepImageTypesAndExtForDecoding($img);
$data = base64_decode($img);
$tempFilePath = UPLOAD_DIR.$fileName.$ext;
$success = file_put_contents($tempFilePath,$data);

if(!$success){
die('unable to save file');
}

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

//delete image from local storage
require_once('./deleteFileFromTemp.php');

//save AWS response to upload in database
$imageUrl = $result['ObjectURL'];
?>