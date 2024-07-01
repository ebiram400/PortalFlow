<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'),true);
if(!empty($gift['id'])){
    include_once('conn.php');
    $db=$conn->prepare('UPDATE article SET title=?,text=? WHERE id=?');
    $db->bind_param('s',$gift['title'],$gift['text'],$gift['id']);
    if($db->execute()){
        echo json_encode(['end'=>'ok']);
    }
}

?>