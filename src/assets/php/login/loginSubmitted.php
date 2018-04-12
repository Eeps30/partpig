<?php
 session_start();
require_once('../mysqlConnect.php');
if(isset($_GET['logout'])){
    if(isset($_SESSION['userinfo'])){
       print("<h1>user session info  of $_SESSION[userinfo]  was destroyed</h1>");
    }
    unset($_SESSION['userinfo']);
    session_destroy();
    exit();
}
$output = [
    'success'=> false,
    'error' => [],
    'data' => []
];


if(isset($_POST['user'], $_POST['password'])){
    if(empty($_POST['user']) or empty($_POST['password'])){
        $output['error'][] ='is empty!!!!';
    }
}
else{
    $output['error'][] ='fields not set';
}
$user = $_POST['user'];
$password = sha1($_POST['password']);

$query = "SELECT * FROM `user` WHERE user_name='$user' AND password='$password'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    $output['success'] =true;
    while($row = mysqli_fetch_assoc($result)){
       $output['data'][] = $row;
    //    print_r($row);
    }
    $_SESSION['userinfo'] = $output['data'][0]['id'];
    // header('Location: index.php');
    // exit();
    xdebug_break();

}
else{
    $output['error'][] = "<br><h1>INVALID LOGIN</h1><br>";
    // header('Location: index.php');
    $_SESSION['invalid'] = 'invalid';
}
unset($output['data'][0]['password']);
unset($password);
print_r($output);

?>