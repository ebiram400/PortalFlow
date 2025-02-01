<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'),true);
if(isset($gift['id'])){
    include_once('conn.php');
    $sql=$conn->prepare('SELECT title,text FROM article WHERE id=?');
    $sql->bind_param('s',$gift['id']);
    $result=$sql->get_result();
    if($result->num_rows > 0){
        $row=$result->fetch_assoc();
        echo json_encode($row);
    }
}


?>