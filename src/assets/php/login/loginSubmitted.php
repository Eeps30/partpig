<?php
 header("Access-Control-Allow-Origin: *");
 header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
 header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
 
 require_once('../mysqlConnect.php');
 
 $entityBody = file_get_contents('php://input');
 $request_data = json_decode($entityBody, true);
 
 $output = [
     'success'=> false,
     'error' => [],
     'data' => []
 ];
// if(isset($_GET['logout'])){
//     if(isset($_SESSION['userinfo'])){
//       $output['data'][] ="user session info  of $_SESSION[userinfo]  was destroyed";
//     }
//     exit();
// }


if(isset($request_data['user'], $request_data['password'])){
    if(!empty($request_data['user']) && !empty($request_data['password'])){
        $user = $request_data['user'];
        $password = sha1($request_data['password']);
        


        $query = "SELECT * FROM `user` WHERE user_name='$user' AND password='$password'";
        $result = mysqli_query($conn, $query);
        
        if(mysqli_num_rows($result) > 0){
            $output['success'] =true;
            while($row = mysqli_fetch_assoc($result)){
               $output['data'][] = $row;
            }
            $_SESSION['userinfo'] = $output['data'][0]['id'];
            // header('Location: index.php');        
        }
        else{
            $output['error'][] = "<br><h1>INVALID LOGIN</h1><br>";
            // header('Location: index.php');
            $_SESSION['invalid'] = 'invalid';
        }
    }
    else{
        $output['error'][] ='is empty!!!!';
    }
}
else{
    $output['error'][] ='fields not set';
}
unset($output['data'][0]['password']);
unset($password);
$json_output = json_encode($output);
print($json_output);
?>
