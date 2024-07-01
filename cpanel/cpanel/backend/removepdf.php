<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'));
if(!empty($gift['id'])){
    include_once ('conn.php');
    
    $db = $conn->prepare('DELETE FROM reports WHERE id=?');
    $db->bind_param('s',$gift['id']);
    if ($db->execute()) {
        echo json_encode(['end' => 'ok']);
    }
}

?>