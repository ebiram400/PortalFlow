<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:5173');

if(isset($_SESSION["isadmin"])){
    echo json_encode(['isadmin'=>'yes']);
}else{
    echo json_encode(['isadmin'=>'no']);
}


?>