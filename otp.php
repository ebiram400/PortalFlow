<?php
include_once ("./connect.php");
require __DIR__ . '/vendor/autoload.php';
use Kavenegar\KavenegarAPI;

session_start();
//get tel
$gift = json_decode(file_get_contents("gift"));
if (isset($gift['tel'])) {
    $tel = $gift['tel'];
    //tel in db?
    $sql = $connect->prepare('SELECT tel FROM users where ?');
    $sql->bind_param('s', $tel);
    $resq = $sql->get_result();

    if (mysqli_num_rows($resq) > 0) {

        //make otp
        $otp = rand(1000, 9999);
        $_SESSION['otp'] = hash('sha256', $otp);

        //send otp
        $key = "apikey";
        $sender = "1000689696";
        $receptor = $tel;
        $message = "کد ورود به سایت " . $otp;
        try {
            $api = new KavenegarApi($key);
            $result = $api->Send($sender, $receptor, $message);

            if ($result) {
                $status = $result[0]->statustext;
                echo json_encode(["status" => $status]);
            } else {
                echo json_encode(["status" => "خطای سرویس دهنده"]);
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
    }else{
        echo json_encode(["status" => "notvalidtel"]);
    }
}




?>