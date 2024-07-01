<?php
if(isset($_FILES['file'])){
    if(move_uploaded_file($_FILES['file']['tmp_name'],'../public/'.$_FILES['file']['name'])){
        echo json_encode(['location' => '../public/'.$_FILES['file']['name']]);
    }else{
        echo json_encode(['error' => 'فایل به درستی ذخیره نشد']);
    }
    
}else{
    echo json_encode(['error' => 'فایل دریافت نشد']);
}

?>