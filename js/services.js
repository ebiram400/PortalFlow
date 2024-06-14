document.addEventListener('DOMContentLoaded', () => {
    // create article with fetch of db
    var page = localStorage.getItem("category");
    async function article() {
        // ,{method:'POST',headers:{'accept':"*/*",'content-Type':'application/json'},body:JSON.stringify({page:page})}
        let res = await fetch('./exmple.json')
        let result = await res.json();
        result.forEach(res => {
            let questdiv = document.createElement('div');
            questdiv.classList.add('req');
            questdiv.innerHTML = res.question;
            questdiv.innerHTML += '<img src="./front-react/public/images/send1..svg" class="sendBtn1">';
            var container = document.getElementById('chat');
            let conlen = (container.children.length) +4;
            let position = container.childNodes[conlen];
            container.insertBefore(questdiv, position);
            observer.observe(questdiv);

            let ansdiv = document.createElement('div');
            ansdiv.classList.add('response');
            ansdiv.style.display = 'none';
            ansdiv.innerHTML = res.answer;
            container.insertBefore(ansdiv, position);
            observer.observe(ansdiv);
        })
    }
    article();

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
                console.log();
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
    let sendBtn2=document.querySelector('.sendBtn2');
    sendBtn2.addEventListener('click',(e)=>{
        e.preventDefault();
        let telNewReq=document.getElementById('telNewReq');
        let textNewReq=document.getElementById('textNewReq');
        async function comment(){
            let res=await fetch('./comment.php',{method:'POST',headers:{'accept':"*/*",'content-Type':'application/json'},body:JSON.stringify({textcomment:textNewReq,telcomment:telNewReq})});
            let jsres=await res.json();
            if(jsres[0].status=='ok'){
                alert("سوال شما رو دریافت کردم و به زودی به شماره شما پاسخ را ارسال میکنم");
                textNewReq.innerHTML="";
            }else{
                alert("متاسفانه سوالتون رو نتونستم دریافت کنم لطفا از قسمت ارتباط با ما در پایین صفحه استفاده کنید");
            }
        }
        comment();
    })
})
