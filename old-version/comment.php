<?php

require __DIR__ . '/vendor/autoload.php';
use Kavenegar\KavenegarAPI;

$comment = json_decode(file_get_contents("php://input"), true);
if (isset($comment["textcomment"]) && isset($comment["telcomment"])) {
    $tel = $comment["telcomment"];
    $text = $comment["textcomment"];

    $key = "apikey";
    $sender = "1000689696";
    $receptor = "09380755070";
    $message = "پیام از سایت : $text , شماره فرستنده:$tel";

    try {
        $api = new KavenegarApi($key);
        $result = $api->Send($sender, $receptor, $message);

        if ($result) {
            $status = $result[0]->statustext;
            echo json_encode(["status" => $status]);
        } else {
            echo json_encode(["status" => "خطای ناشناخته"]);
        }
    } catch (\Kavenegar\Exceptions\ApiException $e) {
        // خطاهای API کاوه نگار
        echo json_encode(["status" => "API Error", "message" => $e->getMessage()]);
    } catch (\Kavenegar\Exceptions\HttpException $e) {
        // خطاهای HTTP کاوه نگار
        echo json_encode(["status" => "HTTP Error", "message" => $e->getMessage()]);
    } catch (Exception $e) {
        // سایر خطاها
        echo json_encode(["status" => "General Error", "message" => $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "notvalid"]);
}


?>