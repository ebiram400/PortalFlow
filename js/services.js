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


document.addEventListener('DOMContentLoaded', () => {
    // create article with fetch of db
    var page = localStorage.getItem("category");

    fetch('./article.php', { method: 'POST', headers: { 'accept': "*/*", "Content-Type": "application/json" }, body: JSON.stringify({ page: page }) })
        .then((res) => res.json())
        .then((result) => {
            if (result.error) {
                console.error(result.error);
                return;
            }
            result.forEach(res => {
                let questdiv = document.createElement('div');
                questdiv.classList.add('req');
                questdiv.innerHTML = res.title;
                questdiv.innerHTML += '<img src="./front-react/public/images/send1..svg" class="sendBtn1">';
                var container = document.getElementById('chat');
                let conlen = (container.children.length) + 4;
                let position = container.childNodes[conlen];
                container.insertBefore(questdiv, position);
                observer.observe(questdiv);

                let ansdiv = document.createElement('div');
                ansdiv.classList.add('response');
                ansdiv.style.display = 'none';
                ansdiv.innerHTML = res.text;
                container.insertBefore(ansdiv, position);
                observer.observe(ansdiv);
            })
        })

    // click on question and show answer
    function send1() {
        let sendBtn1 = document.getElementsByClassName('sendBtn1');
        for (let i = 0; i < sendBtn1.length; i++) {
            sendBtn1[i].addEventListener('click', (e) => {
                let parent = e.target.parentNode;
                e.target.remove();
                parent.classList.remove('req');
                parent.classList.add('sended')
                let myAns = parent.nextElementSibling;
                myAns.style.display = 'block';
            })
        }
    }
    setTimeout(send1, 1000);

    // animation for sended
    let sendeds = document.querySelectorAll('.sended');
    let responses = document.querySelectorAll('.response')
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anime-sended');
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: 0 })
    sendeds.forEach(sended => {
        observer.observe(sended);
    })
    responses.forEach(response => {
        observer.observe(response);
    })

    // send a new request from viwer
    let sendBtn2 = document.querySelector('.sendBtn2');
    sendBtn2.addEventListener('click', (e) => {
        e.preventDefault();
        let telNewReq = document.getElementById('telNewReq').value;
        let textNewReq = document.getElementById('textNewReq').value;
        async function comment() {
            let res = await fetch('./comment.php', { method: 'POST', headers: { 'accept': "*/*", "Content-Type": "application/json" }, body: JSON.stringify({ textcomment: textNewReq, telcomment: telNewReq }) });
            return await res.json();
        }
        let jsres = comment();
        if (jsres) {
            console.log(jsres);
            if (jsres.status == 'ok') {
                alert("سوال شما رو دریافت کردم و به زودی به شماره شما پاسخ را ارسال میکنم");
                textNewReq.innerHTML = "";
            }else if(jsres.status == 'notvalid'){
                alert('لطفا سوال و شماره همراهتون رو برای ارسال وارد کنید');
            }else {
                alert("متاسفانه سوالتون رو نتونستم دریافت کنم لطفا از قسمت ارتباط با ما در پایین صفحه استفاده کنید");
            }
        }
    })
})
