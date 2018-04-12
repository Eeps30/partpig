<?php
// session_start();

if(isset($_SESSION)){

    if(isset($_SESSION['userinfo'])){
        echo '<h1>valid user</h1>';
    }
    else if(isset($_SESSION['invalid'])){
        echo '<h1>invalid user</h1>';
    }
    else{
        echo 'catch errors';
    }
}
?>