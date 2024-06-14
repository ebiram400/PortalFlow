 // click in services
 let services = document.querySelectorAll(".card_service");
 services.forEach(element => {
     element.addEventListener("click", (e) => {
         e.preventDefault();
         localStorage.setItem("category", element.childNodes[3].innerHTML);
         let stem = document.querySelectorAll('#stem');
         stem.forEach(element => {
             element.remove();
         });
         let newpage = document.getElementById('new-page');
         newpage.innerHTML = '<?php include "services.php"; ?>';
     })
 });
 // click in projects
 let info = document.querySelector(".info");
 info.childNodes[3].addEventListener("click", e => {
     e.preventDefault();
     let stem = document.querySelectorAll('#stem');
     stem.forEach(element => {
         element.remove();
     });
     let newpage = document.getElementById('new-page');
     newpage.innerHTML = '<?php include "projects.php"; ?>';
 })