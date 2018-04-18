<?php
header("Access-Control-Allow-Origin: *");
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
// $subject = "Sending with SendGrid is Fun";
$to = new SendGrid\Email("PartPig Automated Contact", "$destination");
$content = new SendGrid\Content("text/plain", "$body");
$mail = new SendGrid\Mail($from, $subject, $to, $content);
// getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
print_r($response);
echo $response->statusCode();
print_r($response->headers());
echo $response->body();

