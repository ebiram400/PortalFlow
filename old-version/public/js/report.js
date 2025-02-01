// level projects in head
fetch('../sessionis.php').then((res)=>res.json()).then((result)=>{
    let projectname=document.querySelector('.project-name');
    projectname.innerHTML=result.user_name;
    let level1=document.querySelector('.level1');
    let level2=document.querySelector('.level2');
    let level3=document.querySelector('.level3');
    if(result.level>0){
        level1.innerHTML='check_box';
        if(result.level>1){
            level2.innerHTML='check_box';
            if(result.level>2){
                level3.innerHTML='check_box';
            }
        }
    }
})

// create pdf with api from db
let poshe=document.getElementById('poshe');
fetch('reports.php').then((res)=>res.json()).then((result)=>{
    result.forEach(element => {
        let embed=document.createElement('embed');
        embed.src="../pdf/"+ element.filename;
        embed.classList.add('pdf');
        poshe.appendChild('embed');
    });
})


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