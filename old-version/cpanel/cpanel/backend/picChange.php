<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if(isset($_POST['oldsrc']) && isset($_FILES['file'])){
    $oldfile=$_POST['oldsrc'];
    $newfile=$_FILES['newpic']['tmp_name'];
    if(move_uploaded_file($newfile,$oldfile)){
        echo json_encode(["end"=>$oldfile]);
    }else{
        echo json_encode(["end"=>'تصویر تغییر نکرد']);
    }
}else{
    echo json_encode(["end"=>'تصویر جدید آپلود نشد']);
}

?>