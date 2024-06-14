<!DOCTYPE html>
<html lang="fa">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovinAshian</title>
    <link rel="stylesheet" href="./bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/login.css">
</head>

<body>
    <a href="./index.php" class="backToHome">
        <div class="nok-back"></div>
        <div class="reg-back">بازگشت به صفحه اول</div>
    </a>

    <img src="./front-react/public/images/logo-novin.png" alt="NovinAshian" class="logo-page-login">

    <div class="regtangel">
        <div class="guid-text">کارفرمای عزیز شماره همراه خورد را در فیلد زیر وارد نمایید</div>
        <input type="tel" name="Inputphon" id="Inputphon" placeholder="09---------" maxlength="11" pattern="[0-9]{11}">
        <div class="guid-text">لطفا کد پیامک شده به شماره همراهتان را وارد نمایید</div>
        <div class="last-col">
            <div class="timer">
                0:00
            </div>
            <input type="text" id="otp" maxlength="4" size="4" min="0" max="9999" pattern="[0-9]{4}" required>
        </div>
    </div>
    <script src="./js/login.js"></script>
</body>

</html>