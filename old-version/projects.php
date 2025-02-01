<?php
include_once("./connect.php");

$db=$connect->prepare('SELECT * FROM project');
$db->execute();
$result=$db->get_result();
if($result->num_rows > 0){
    $res=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($res);
}else{
    echo 'db is empty';
}

?>