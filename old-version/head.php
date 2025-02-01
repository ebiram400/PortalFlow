<?php
header("content-Type: application/json");
session_start();

if(isset($_SESSION["tel"])){
    echo json_encode(["end"=>"ok"]);
}else{
    echo json_encode(["end"=>"no"]);
}

?>