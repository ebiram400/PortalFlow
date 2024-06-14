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

        let services=document.querySelectorAll(".card_service");
        services.forEach(element => {
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                console.log(element.childNodes[3].innerHTML);
                if(element.childNodes[3].innerHTML == 'تغییر و ساخت'){
                    window.location.href= "./services.html";
                }

            })
        });