<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'));
if(!empty($gift['name'])){
    include_once ('conn.php');
    $sql = "SELECT MAX(id) AS max_id FROM users";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $max_id = $row['max_id'];
        $newId = $max_id + 1;
    } else {
        $newId = "";
    }
    $newlevel="1";
    $db = $conn->prepare('INSERT INTO users(id,user_name,project_name,tel,level) VALUES(?,?,?,?,?)');
    $db->bind_param('sssss', $newId , $gift['name'],$gift['project'],$gift['phone'],$newlevel);
    if ($db->execute()) {
        echo json_encode(['end' => 'ok']);
    }
}

?>