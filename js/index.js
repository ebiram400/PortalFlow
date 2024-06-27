
// input or output navbar
fetch('./head.php').then((res) => res.json()).then((result) => {
    if (result.end == 'ok') {
        let textnav = document.getElementsByClassName("text-user-nav")[0];
        textnav.innerHTML = "خروج";
        let icon = document.getElementsByClassName('icon-user-nav')[0];
        icon.innerHTML = 'exit_to_app';
        let reportnav=document.getElementsByClassName('report-nav')[0];
        reportnav.innerHTML=' گزارشات کارفرما ';
    } else {
        let textnav = document.getElementsByClassName("text-user-nav")[0];
        textnav.innerHTML = 'ورود کارفرما';
        let icon = document.getElementsByClassName('icon-user-nav')[0];
        icon.innerHTML = 'person';
    }
})
// click on icon input or output navbar
let usernav = document.getElementById('user-nav')
let icon = document.getElementsByClassName('icon-user-nav')[0];
usernav.addEventListener("click", e => {
    e.preventDefault();
    let ways = document.getElementsByClassName("text-user-nav");
    if (ways[0].innerHTML == 'ورود کارفرما') {
        location.href = './login.html';
    } else {
        fetch('./destroy_username.php').then((res) => {
            if (res.status == '200') {
                ways[0].innerHTML = 'ورود کارفرما';
                icon.innerHTML = 'person';
                reportnav.innerHTML='';
            }
        })
    }
})

// click in services
let services = document.querySelectorAll(".card_service");
services.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(element.childNodes[3].innerHTML);
        localStorage.setItem("category", element.childNodes[3].innerHTML);
        window.location.href('./services.html');
    })
});
// click in projects
let info = document.querySelector(".info");
console.log(info);
info.childNodes[1].addEventListener("click", e => {
    console.log(info);
    e.preventDefault();
    location.href('./projects.html');
})

// animation
window.addEventListener("scroll", () => {
    let anime2 = document.getElementsByClassName('animate2');
    let rect = anime2[0].getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let target = document.querySelectorAll(".circle");
    if ((rect.bottom + viewHeight / 2) <= viewHeight) {
        target.forEach(element => {
            element.classList.add('addanime');
        });
    } else {
        target.forEach(element => {
            element.classList.remove('addanime');
        });
    }
})

// animation
window.addEventListener("scroll", () => {
    let anime = document.getElementById('animate');
    let rect = anime.getBoundingClientRect();
    let viewHight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let target = document.querySelectorAll(".card_service");
    target.forEach(element => {
        if ((rect.top + viewHight) <= viewHight) {
            element.classList.add('addanime');
        } else {
            element.classList.remove('addanime')
        }
    });
})

//login or exit 
async function logorexit(){
    let req=await fetch('../loginorexit.php');
    let res=await req.json();
    if(res.ok){
        let icon=document.getElementById("icontarget");
        let text=document.getElementById('texttarget');
        if(res.status =='exit'){
            icon.innerHTML='exit_to_app';
            text.innerHTML='خروج';
            
        }else{
            icon.innerHTML='person';
            text.innerHTML='ورود کارفرما';
        }
    }
}
document.addEventListener("DOMContentLoaded",logorexit())