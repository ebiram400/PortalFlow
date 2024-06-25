import { useState } from "react";


export default function Gallery() {
    let [that,setthat]=useState(null);
    async function PicChange(){
        let response=await fetch('picChange.php',{method:'post',headers:{'accept':'*/*','Content-Type':'application/json'},body: JSON.stringify({oldsrc:that}) });
        let result=await response.json();
        if(!result){
            alert("مشکلی در آپلود تصویر جدید رخ داده است")
        }
    }


    return (
        <>
            <div className="fs-5 fw-bold mt-3 mb-5">برای تغییر هر عکس روی آن کلیک کنید<br />سپس تصویر جایگزینش را از حافظه خود انتخاب کنید</div>
            <input type="file" name="newpic" id="newpic" accept="*/image" onChange={PicChange}/>
            <label for="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../../../front-react/public/images/1.jpg" /></label>
            <label for="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../../../front-react/public/images/2.jpg" /></label>
            <label for="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../../../front-react/public/images/3.jpg" /></label>
            <label for="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../../../front-react/public/images/13.jpg" /></label>
        </>
    )
}