<?php
header("Access-Control-Allow-Origin: *");
require("mailDetails.php");
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
// If you are using Composer (recommended)
require '../vendor/autoload.php';
// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");
$from = new SendGrid\Email("PartPig Automated Response", "$sender");
$subject = "Sending with SendGrid is Fun";
$to = new SendGrid\Email("User", "$destination");
$content = new SendGrid\Content("text/plain", "refactoring again");
$mail = new SendGrid\Mail($from, $subject, $to, $content);
// getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
print_r($response);
echo $response->statusCode();
print_r($response->headers());
echo $response->body();

