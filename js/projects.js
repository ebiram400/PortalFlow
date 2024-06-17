
async function Projects(){

    let res=await fetch('projects.php');
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
