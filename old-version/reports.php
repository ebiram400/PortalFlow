<?php
session_start();
if(isset($_SESSION["id"])){
    include_once("./connect.php");
    $sql=$connect->prepare("SELECT filename FROM reports WHERE user_id=?");
    $sql->bind_param("s",$_SESSION["id"]);
    $result=$sql->get_result();
    if($result->num_rows > 0){
        $row=$result->fetch_all();
        echo json_encode($row);
    }
}
?>