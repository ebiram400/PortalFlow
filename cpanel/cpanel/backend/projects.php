<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

include_once ('conn.php');

$db = $conn->prepare('SELECT * FROM project');
$result = $db->get_result();
if ($result->num_rows > 0) {
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($rows);
}