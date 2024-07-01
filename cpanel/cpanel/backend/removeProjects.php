<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'),true);
if(!empty($gift['id'])){
    include_once('conn.php');
    $sql=$conn->prepare('DELETE FROM project WHERE id=?');
    $sql->bind_param('s',$gift['id']);
    if($sql->execute()){
        echo json_encode(['end'=>'ok']);
    } 
}

?>