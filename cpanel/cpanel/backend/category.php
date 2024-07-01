<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$gift=json_decode(file_get_contents('php://input'),true);
if(isset($gift['title'])){
    include_once('conn.php');
    $sql0=$conn->prepare('SELECT id FROM groups WHERE category=?');
    $sql0->bind_param('s',$gift['title']);
    $category= $sql0 -> get_result();

    $db=$conn->prepare('SELECT id,title FROM article WHERE category_id=?');
    $db->bind_param('s',$category);
    $result=$db->get_result();
    if($result->num_rows > 0){
        $rows=$result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($rows);
    }
}

?>