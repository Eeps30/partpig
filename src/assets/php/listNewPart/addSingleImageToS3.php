<?php
require '../vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

$GLOBALS['ext'] = '';
$day = date('Y-m-d');
$_POST['username'] = 'user2';
$username = $_POST['username'];

// compose the file directory path ex: images/2018-4-12/user1/
$filePath = "images/$day/$username";
    

//
function prepImageTypesAndExtForDecoding($imageURI){
    
    $valid = false;
    $validExtensions = ['png','jpeg', 'jpg'];
    foreach($validExtensions as $vExt){
        if(preg_match("/data:image\/$vExt/", $imageURI)){
            $imageURI = str_replace("data:image/$vExt;base64,", '', $imageURI);
            $GLOBALS['ext'] = $vExt;
            $valid = true;
            break;
           }
    }
    if(!$valid){
        die("invalid file type");
    }
    // else if(preg_match('/data:image\/jpeg/', $imageURI)){
    //     $imageURI = str_replace('data:image/jpeg;base64,', '', $imageURI); 
    //     $ext = 'jpeg';
    // }
    // else if(preg_match('/data:image\/jpg/', $imageURI)){
    //     $imageURI = str_replace('data:image/jpg;base64,', '', $imageURI); 
    //     $ext = 'jpg';
    // }
   
    return $imageURI;
}

function saveAndUploadImageToAws($img, $filePath, $index){
    global $sdk;
    $previousFileName = "AWS_IMG_$index"."_";

    //compose the name with prev name and time ex: AWS_IMG_1523578198
    $fileName = $previousFileName . time();
    


    $img = prepImageTypesAndExtForDecoding($img);
    $data = base64_decode($img);
    $tempFilePath = UPLOAD_DIR.$fileName.$GLOBALS['ext'];
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
    require('./deleteFileFromTemp.php');
    return $result['ObjectURL'];
}



//defaults if post doesn't have user or image
if(empty($_POST['username'])){
    $_POST['username'] = 'user2';
}
if(empty($request_data['images'][0])){
    die('please upload an image');
}




//decode image and save it locally
define('UPLOAD_DIR', './tempUploads/');
$imageUrl = [];
$index = 0;
// foreach($request_data['images'] as $val){

foreach($request_data['images'] as $singleImage){
    $image = $singleImage['imagePreviewUrl'];
    $imageUrl[] = saveAndUploadImageToAws($image, $filePath, $index);
    $index++;
}


//save AWS response to upload in database
// $imageUrl = $result['ObjectURL'];
?>