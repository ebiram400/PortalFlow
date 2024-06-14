<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link href="./bootstrap-5.0.2-dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/services.css">
</head>

<body>
    <!--- -----header -------->
    <div class="row d-flex align-items-center justify-content-between color-nav">
        <div class="col d-flex flex-column">
            <div class="col d-flex">
                <span class="material-symbols-outlined color-green fs-2 text-shadow-cyan">
                    location_on
                </span>
                <span class="color-cyan fs-5 ms-2 text-shadow-cyan">
                    مشهد
                </span>
            </div>
            <div class="col mt-2  d-flex">
                <span class="material-symbols-outlined color-green fs-2 text-shadow-green">
                    phone_in_talk
                </span>
                <a href="tel:09382335182" class="text-decoration-none text-shadow-cyan">
                    <span class="color-cyan fs-5 ms-2">
                        0938 233 5182
                    </span>
                </a>
            </div>
        </div>
        <div class="col d-flex flex-column align-items-end">

            <div class="col report-nav"></div>

            <div class="col user-nav d-flex flex-column align-items-center">
                <div class="icon-user-nav color-green">
                    <span class="material-symbols-outlined fs-1">
                        person
                    </span>
                </div>
                <div class="text-user-nav color-green fs-6 text-nowrap">
                    ورود کارفرما
                </div>
            </div>
        </div>
    </div>
    <!---------slide bar--------->
    <div class="slideshow-container">

        <div class="mySlides fade">
            <img src="./front-react/public/images/1.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/3.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/12.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/13.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/16.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/18.jpg" style="width:100%" class="slide-nav">
        </div>

        <div
            class="dropfilter d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle">
            <div class="col"><a href="./index.html"><img src="./front-react/public/images/logo-novin.png"
                        class="logo-nav"></a></div>
            <div class="col color-cyan fs-1 fw-bold text-shadow-cyan">گروه فنی مهندسی نوین آشیان </div>
            <div class="color-green fs-4 fw-bold text-shadow-green">تضمین سریع زمان </div>
            <div class="color-green fs-4 fw-bold text-shadow-green mt-2">تضمین پایین ترین قیمت</div>
            <div class="col color-green fs-4 fw-bold text-shadow-green mt-2">تضمین بالاترین کیفیت</div>
        </div>
        <script>
            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }

                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 3000); // Change image every 2 seconds
            }
        </script>
    </div>
    <!----------------chat-------------->
    <div class="chat-body">
        <!----------------bread crumb------------->
        <div class="bread-crumb">
            <div class="this-page d-flex align-items-center">
                <img id="picPage" style="width: 50px;">
                <div class="d-flex flex-column">
                    <div class="there fs-6 fw-bold color-white"></div>
                    <div class="fs-6 color-white fw-light">5 member</div>
                </div>
            </div>
            <span class="material-symbols-outlined color-white fs-6">
                arrow_back_ios
            </span>
            <a href="./index.html" class="text-decoration-none">
                <div class="color-green fs-6 fw-bold">صفحه اول</div>
            </a>
            <span class="material-symbols-outlined color-white">
                signpost
            </span>
            <script>
                let namePage = document.getElementsByClassName('there')[0];
                let thisPage = localStorage.getItem("category");
                namePage.textContent = thisPage;
                let picPage = document.getElementById('picPage');
                switch (thisPage) {
                    case 'تغییر و ساخت':
                        picPage.setAttribute("src", "./front-react/public/images/اضافه کردن..svg");
                        break;
                    case 'گچ کاری':
                        picPage.setAttribute("src", "./front-react/public/images/گچ کاری..svg");
                        break;
                    case 'انواع سقف و نورپردازی':
                        picPage.setAttribute("src", "./front-react/public/images/انواع سقف..svg");
                        break;
                    case 'دیوارپوش':
                        picPage.setAttribute("src", "./front-react/public/images/انواع دیوارپوش..svg");
                        break;
                    case 'انواع کفپوش':
                        picPage.setAttribute("src", "./front-react/public/images/انواع کفپوش..svg");
                        break;
                    case " کابینت و کمد دیواری":
                        picPage.setAttribute("src", "./front-react/public/images/کابینت..svg");
                        break;
                    case "پتینه و نقاشی":
                        picPage.setAttribute("src", "./front-react/public/images/پتینه کاری و نقاشی..svg");
                        break;
                    case "انواع درب":
                        picPage.setAttribute("src", "./front-react/public/images/انواع درب..svg");
                        break;
                    case "تاسیسات برقی و گازی":
                        picPage.setAttribute("src", "./front-react/public/images/تاسیسات برقی و گازکشی..svg");
                        break;
                    case "لوله کشی آب و فاضلاب":
                        picPage.setAttribute("src", "./front-react/public/images/لوله کشی آب و فاضلاب..svg");
                        break;
                }
            </script>
        </div>
        <!-------------------body chat----------------->
        <div id="chat" class="container">
            <div class="sended">سلام</div>
            <div class="response">سلام <br>وقت بخیر</div>
            <div class="response">درباره اضافه کردن یا تغییرات خونه سوالاتی هست که با ارسالشون بهتون جواب میدم. اگر سوال
                دیگه ای دارید یا مشورتی میخواید که جزو این سوالات نیست میتونید پایین برام ارسالش کنید تا بهتون در اسرع
                وقت جواب بدم</div>
        </div>
        <div class="comment d-flex align-items-center">
            <img src="./front-react/public/images/send2..svg" class="sendBtn2">
            <div class="input-comment">
                <input type="tel" name="telNewReq" id="telNewReq" class="fs-6" placeholder="شماره تماس" maxlength="11">
                <input type="text" name="textNewReq" id="textNewReq" class="fs-6" placeholder="سوال یا نظر دیگری دارم">
            </div>
        </div>
    </div>
    <script src="./js/services.js"></script>
    </div>
    <!-------------footer---------- -->
    <div class="footer">
        <div class="row justify-content-around">

            <div class="col-md-4">
                <div class="text-center mb-5"><img src="./front-react/public/images/logo-novin.png" width="200px"></div>
                <div class="text-center">
                    <a href="https://eitaa.com/Moeinrahimi110" class="m-2"><img
                            src="./front-react/public/images/Group 2..svg"></a>
                    <a href="tel:/09382335182" class="m-2"><img src="./front-react/public/images/Group 3..svg"></a>
                    <a href="t.me/:rahimimoein1" class="m-2"><img src="./front-react/public/images/telegram..svg"></a>
                    <a href="" class="m-2"><img src="./front-react/public/images/whatsapp..svg"></a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="color-cyan fs-2 fw-bold text-center mb-3 mt-3">درباره سایت</div>
                <div class="color-cyan fs-6 text-center fw-bold border-start border-end p-4">هدف این سایت معرفی و سهولت
                    دسترسی مردم عزیز مشهد به خدمات بازسازی منزل و رفع دغدغه های عزیزانی است که در این زمینه تجربه کافی
                    ندارند و به دنبال فرد قابل اعتماد هستند که گزارش کار را به صورت واضح ارائه دهد و از پس مشکلات فنی
                    کار برآید.
                    همچنین کارفرمایان عزیز میتوانند گزارشات را به صورت آنلاین در قسمت ورود کارفرما ببینند.
                    از تجربیات مان نیز به صورت پرسش و پاسخ در هر بخش گنجانده شده که مقالات مفید و ارزشمندی میتوانند
                    باشند
                </div>
            </div>

            <div class="col-md-4">
                <div class="color-cyan fs-2 fw-bold text-center mb-3 mt-3">درباره نوین آشیان</div>
                <div class="color-cyan fs-6 text-center fw-bold p-4">
                    از سال 94 شروع به فعالیت در حوزه ساخت و ساز زیر نظر مهندسان با تجربه کردیم و با اضافه کردن دانش خود
                    در این زمینه طی تحصیلات آکادمیک و گواهینامه های فنی این راه را ادامه دادیم. تا به امروز در پروژه های
                    مختلف و با حل مشکلات مختلف در پروژه ها تجارب گوناگونی را بدست آورده ایم و امروز آماده خدمت رسانی به
                    شما عزیزان هستیم
                </div>
            </div>
        </div>
    </div>


</body>

</html>