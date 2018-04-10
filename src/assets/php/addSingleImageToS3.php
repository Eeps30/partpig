<?php
require './vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

//defaults if post doesn't have user or image
if(empty($_POST['username'])){
    $_POST['username'] = 'user2';
}
if(empty($_POST['image'])){
    $_POST['image'] = '../images/part2/part2a.jpg';
}

$day = date('Y-m-d');
// $unixTimestamp = (new DateTime())->format('U');
$username = $_POST['username'];
$image = $_POST['image'];
$filePath = "images/$day/$username";
$previousFileName = 'listedImageName';
$fileName = $previousFileName . time();



$s3Client = $sdk->createS3();
try{
    $result =  $s3Client->putObject([
        'Bucket' => 'teampartpig',
        'Key'    => "$filePath/$fileName" ,
        'Body'   => fopen($image, 'r'),
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
echo $imageUrl;

//if you need json output
// $json_output = json_encode($imageUrl);
// print($json_output);
?>