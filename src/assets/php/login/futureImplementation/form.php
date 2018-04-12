<?php
session_start();
require_once('db.config.php');

if(isset($_POST['user'], $_POST['password'])){
    echo '<br>fields are set';
    if(empty($_POST['password']) or empty($_POST['user'])){
        echo 'is empty!!!!';
    }
}
else{
    echo '<br>fields not set';
}
print_r($_POST);
 $user = $_POST['user'];
 $password = sha1($_POST['password']);
$query = "SELECT * FROM `mylogin` WHERE username='$user' AND password='$password'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    echo "<h1>password is valid</h1>";
    $_SESSION['userinfo'] = mysqli_fetch_assoc($result);
    echo "<h2>  session is </h2>";
    print_r($_SESSION);
    header('Location: index.php');
    exit();
}
else{
    echo "<br><h1>INVALID LOGIN</h1><br>";
    header('Location: index.php');
    $_SESSION['invalid'] = 'invalid';
    exit();
}
echo '<br>result<br>';
print_r($result);
echo '<br><br>';


echo '<br>fieldCount<br>';
while($row = mysqli_fetch_assoc($result)){
    print_r($row);
    
}
echo '<br><br>';


echo 'posting <br>';
print_r($_POST);

echo '<br> username is '.$_POST['user'];
echo '<br> password is '.sha1($_POST['password']);




?>