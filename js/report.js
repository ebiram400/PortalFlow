// level projects in head
fetch('sessionis.php').then((res)=>res.json()).then((result)=>{
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
        embed.src="./reports/"+element.filename;
        embed.classList.add('pdf');
        poshe.appendChild('embed');
    });
})

// input or output user in head
let usernav = document.getElementById('user-nav')
let icon=document.getElementsByClassName('icon-user-nav');
usernav.addEventListener("click", e => {
    e.preventDefault();
    let ways = document.getElementsByClassName("text-user-nav");
    if (ways[0].innerHTML == 'ورود کارفرما') {
        location.href = './login.html';
    } else {
        fetch('./destroy_username.php').then((res)=>{
            if(res.json().status=='200'){
                ways[0].innerHTML='ورود کارفرما';
                icon.innerHTML='exit_to_app';
            }
        })
    }
})
