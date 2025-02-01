<?php
session_start();
include_once("./connect.php");
if(isset($_SESSION["tel"])){
    $sql=$connect->prepare("SELECT * FROM users WHERE tel=?");
    $sql->bind_param("s",$_SESSION["tel"]);
    $result=$sql->get_result();
    if($result->num_rows > 0){
        $row=$result->fetch_assoc();
        $_SESSION['id']=$row['id'];
        echo json_encode(['id'=>$row['id'],'user_name'=>$row['user_name'],"project_name"=>$row['project_name'],'tel'=>$row['level']]);
    }else{
        echo json_encode(['id'=>0,'user_name'=>0,"project_name"=>0,'tel'=>0]);
    }
}else{
    echo json_encode(['id'=>0,'user_name'=>0,"project_name"=>0,'tel'=>0]);
}

?>