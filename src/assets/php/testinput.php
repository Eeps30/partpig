<?php
require './vendor/autoload.php';
require('./awsConnect.php');

$sdk = new Aws\Sdk($sharedConfig);

//temp for testing
if(empty($_POST['username'])){
    $_POST['username'] = 'user1';
}
if(empty($_POST['image'])){
    $_POST['image'] = '../images/part2/part2a.jpg';
}

$day = date('Y-m-d');
$unixTimestamp = (new DateTime())->format('U');
$username = $_POST['username'];
$image = $_POST['image'];




$s3Client = $sdk->createS3();
try{
    $result =  $s3Client->putObject([
        'Bucket' => 'teampartpig',
        'Key'    => "images/$day/$username/$unixTimestamp" ,
        'Body'   => fopen($image, 'r'),
        'ACL'    => 'public-read',
        ]);

        //list files in bucket
    //  $result =  $s3Client->listObjects([
    //      'Bucket' => 'teampartpig'
    //  ]);
   // forEach($result->Keys as $item)
    }
 catch (Aws\S3\Exception\S3Exception $e) {
    echo "There was an error uploading the file.\n";
}


$imageUrl = $result['ObjectURL'];
echo $imageUrl;

//uncomment if you need json output

// $json_output = json_encode($imageUrl);
// print($json_output);
?>