import { useRef, useState } from "react"
import Employers from "./employers"
import Reports from "./reports"



export default function Users() {

    let newPhone=useRef();
    let nameProject=useRef();
    let nameEmployer=useRef();
    async function AddEmployer(){
        let req=await fetch('../../backend/newEmployer.php',{ method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ name:nameEmployer,project:nameProject.current.value,phone: newPhone.current.value })})
        let res=await req.json()
        if(!res.ok){
            alert("ارتباط با سرور برای ثبت کارفرمای جدید برقرار نشد")
        }
    }

    let [reporting, setreporting] = useState(null)

    if (!reporting) {
        return (
            <>
                <div className="adduser">
                    <button className="text-light bg-green fw-bold p-2 border-0 rounded-3" onClick={()=>{AddEmployer()}} ><span className="d-md-inline d-none">اضافه
                        کردن کارفرما</span> +</button>
                    <input type="text" ref={newPhone} id="newPhone" placeholder="شماره تلفن" className="newEmployer" />
                    <input type="text" ref={nameProject} id="nameProject" placeholder="نام پروژه" className="newEmployer" />
                    <input type="text" ref={nameEmployer} id="nameEmployer" placeholder="نام کارفرما" className="newEmployer" />
                </div>
                <table className="userTable">
                    <Employers setreporting={setreporting} />
                </table>
            </>
        )
    }else{
        return(
            <Reports reporting={reporting} />
        )
    }
}