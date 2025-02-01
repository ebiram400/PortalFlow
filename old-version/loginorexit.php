<?php
session_start();
include_once("./connect.php");
if(isset($_SESSION["tel"])){
    echo json_encode(['status'=>'login']);
}else{
    echo json_encode(['status'=>'exit']);
}
?>