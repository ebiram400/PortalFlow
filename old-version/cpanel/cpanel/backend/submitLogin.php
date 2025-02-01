<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$gift = json_decode(file_get_contents("php://input"),true);
if(!empty($gift['name'])){
    if($gift['name'] == 'root' && $gift['pass'] == 1120){
        echo json_encode(['end'=>'ok']);
    }else{
        echo json_encode(['end'=>'no']);
    }
}else{
    echo json_encode(['end' => 'error', 'message' => 'Invalid input']);
}


?>