<?php
include_once ("./connect.php");
session_start();
$gift = json_decode(file_get_contents("gift"));
// verify code
if (isset($gift['inputCode'])) {
    $inputCode=$gift['inputCode'];
    $inputCode=hash('sha256',$inputCode);
    if($_SESSION['otp']==$inputCode){

        // unset sessions
        unset($_SESSION['otp']);
        // make sesion tel
        $_SESSION['tel'] = $gift['tel'];

        echo json_encode(['end'=>'verify']);
    }
}else{
    //berot forth
    if(!isset($_SESSION['otp-atemp'])){$_SESSION['otp-atemp']=0;}
    if($_SESSION['otp-atemp']>3){echo json_encode(['end'=> 'attack']);}
    else{
        $_SESSION['otp-atemp']++;
        echo json_encode(['end'=> 'notvalid']);
    }
}













?>