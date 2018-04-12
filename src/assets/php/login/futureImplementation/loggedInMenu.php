<?php
session_start();

if(isset($_GET['logout'])){
    echo "<h1> let me logout!</h1>";
    session_destroy();
    unset($_GET['logout']);
    header('Location', '/index.php');
}
if(isset($_SESSION['userinfo'])){
    // print_r($_SESSION['userinfo']);
    echo "logged in as ".$_SESSION['userinfo']['username'];
    ?>
    <a href="?logout=true"><button>logout</button></a>
    <?php
}
else{
    echo 'not logged in';
}



// echo "GET IS";
// print_r($_GET);
// session_destroy();

?>