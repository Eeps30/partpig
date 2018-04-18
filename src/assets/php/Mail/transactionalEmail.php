<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require("mailDetails.php");


$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

$requiredFields = ['name', 'email', 'body', 'subject'];
foreach($request_data as $key => $value){
    if(in_array($key, $requiredFields)){
       $$key = $value;
    }
    else{
        die('required fields missing');
    }
}

// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
// If you are using Composer (recommended)

require '../vendor/autoload.php';
// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");
$from = new SendGrid\Email("$name", "$email");
// $subject = "is an auto variable
$to = new SendGrid\Email("PartPig Automated Contact", "$destination");
$content = new SendGrid\Content("text/plain", "$body");
$mail = new SendGrid\Mail($from, $subject, $to, $content);
// getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
$status = $response->statusCode();
if($status === 202){
    $output['success'] = true;
    $output['data'][] = "email sent";
}
else{
    $output['success'] = false;
    $output['error'][] = "status code: $status is incorrect";
    $output['error'][] = "email not sent";
    
}

$json_output = json_encode($output);
print($json_output);

// print_r($response->headers());
// echo $response->body();

