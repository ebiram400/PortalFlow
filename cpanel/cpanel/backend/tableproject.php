<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift = json_decode(file_get_contents("php://input"), true);

if (!empty($gift['address']) && !empty($gift['services'])) {
    include_once ("conn.php");
    $sql0 = "SELECT MAX(id) AS max_id FROM project";
    $result0 = $conn->query($sql0);
    if ($result0->num_rows > 0) {
        $row = $result0->fetch_assoc();
        $max_id = $row['max_id'];
        $new_id = $max_id + 1;
    }else{
        $new_id="";
    }

    $sql = $conn->prepare("INSERT INTO project (id, address, services) VALUES (?, ? , ?)");
    $sql->bind_param('s', $new_id, $gift['address'], $gift['services']);
    if($sql->execute()){
        echo json_encode(['end'=>'ok']);
    }else{
        echo json_encode(['end'=>'no']);
    }
}


?>