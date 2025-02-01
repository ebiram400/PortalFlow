<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift = json_decode(file_get_contents('php://input'));
if (!empty($gift['id'])) {
    include_once ('conn.php');

    $db = $conn->prepare('SELECT project_name,level FROM users WHERE id=?');
    $db->bind_param('s',$gift['id']);
    $result=$db->get_result();
    if ($result->num_rows >0) {
        $row=$result->fetch_assoc();
        echo json_encode($row);
    }else{
        echo json_encode(['end'=>'آیدی کارفرما در سرور یافت نشد']);
    }
}

?>