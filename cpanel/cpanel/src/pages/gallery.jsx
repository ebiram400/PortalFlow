import { useState } from "react";


export default function Gallery() {
    let [that,setthat]=useState(null);
    async function PicChange(e){
        let fdata=new FormData()
        fdata.append('file',e.target.files[0])
        fdata.append('oldsrc',that)
        let response=await fetch('http://localhost/moein/cpanel/cpanel/backend/picChange.php',{method:'post',body: fdata });
        let result=await response.json();
        if(!result.ok){
            alert("مشکلی در آپلود تصویر جدید رخ داده است")
        }
        if(result.end !== 'ok'){
            alert(result.end)
        }
    }


    return (
        <>
            <div className="fs-5 fw-bold mt-3 mb-5">برای تغییر هر عکس روی آن کلیک کنید<br />سپس تصویر جایگزینش را از حافظه خود انتخاب کنید</div>
            <input type="file" name="newpic" id="newpic" accept="image/*" onChange={(e)=>PicChange(e)}/>
            <label htmlFor="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../public/1.jpg" /></label>
            <label htmlFor="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../public/2.jpg" /></label>
            <label htmlFor="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../public/3.jpg" /></label>
            <label htmlFor="newpic"><img className="oldpic" onClick={(e)=>{setthat(e.target.src)}} src="../../public/4.jpg" /></label>
        </>
    )
}