<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift = json_decode(file_get_contents('php://input'), true);
if (!empty($gift['title'])) {
    include_once ('conn.php');
    $sql = "SELECT MAX(id) AS max_id FROM article";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $max_id = $row['max_id'];
        $newId = $max_id + 1;
    } else {
        $newId = "";
    }

    $db = $conn->prepare('INSERT INTO article(id,title,text) VALUES(?,?,?)');
    $db->bind_param('s', $newId, $gift['title'], $gift['text']);
    if ($db->execute()) {
        echo json_encode(['end' => 'ok']);
    }
}

?>