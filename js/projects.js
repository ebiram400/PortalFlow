
async function Projects(){

    let res=await fetch('../projects.php');
    let result=await res.json();
    console.log(result);
    result.forEach(element => {
        var mytbody=document.querySelector('#mytbody');
        let newtr=document.createElement('tr');
        let td1=document.createElement('td');
        td1.innerText=element.id;
        let td2=document.createElement('td');
        td2.innerText=element.address;
        let td3=document.createElement('td');
        td3.innerText=element.services;
        newtr.appendChild(td1);
        newtr.appendChild(td2);
        newtr.appendChild(td3);
        mytbody.appendChild(newtr);
    });
}
document.addEventListener('DOMContentLoaded',Projects())


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