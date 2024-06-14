 // timer
 let timer = document.querySelector('.timer');
 var show_timer = [1,0]
 let edit_timer = (time) => { if (time <= 9) time = "0" + time; return time; }
 function timer1() {
     timer.innerHTML = `${show_timer[0]}:${edit_timer(show_timer[1])}`;
     show_timer[1]--;
     if (show_timer[1] == -1) {
         show_timer[0]--;
         show_timer[1]=59;
         if (show_timer[0] == -1) {
             timer.innerHTML ='<div class="new-otp" onclick="sendcode()">ارسال مجدد پیامک</div>';
             clearInterval(timerId);
         }
     }
 }
 function runtimer(){
 let timerId = setInterval(timer1, 1000);
 }

 // send code
 let inputPhone=document.getElementById('Inputphon');
 async function sendcode(){
     if(inputPhone.value.length==11){
         let response=await fetch('otp.php',{
             method:'post',headers:{'Accept':'*/*','Content-Type':'Application/json'},body:JSON.stringify({tel:inputPhone.value})
         });
         let result=await response.json();
         if( result == 'sended'){
             runtimer();
         }else{
             alert('شماره همراه شما موجود نمی باشد.لطفا با ما تماس بگیرید')
         }
     }
 }
 inputPhone.addEventListener('input',sendcode);
 
 // verify code
 let inputCode=document.getElementById("Inputphon");
 async function verifyCode(){
     if(inputCode.value.length==4){
         let response=await fetch('verifyOtp.php',{
             method:'post',headers:{'Accept':'*/*','Content-Type':'Application/json'},body:JSON.stringify({tel:inputPhone.value,inputCode:inputCode.value})
         })
         let result=await response.json();
         if( result == 'verify'){
            location.href='./report.html';
         }else{
             alert('کد وارد شده صحیح نمی باشد');
         }
     }
 }
 inputCode.addEventListener('input',verifyCode);