import { useState } from "react"
import Tinyeditor from "./Tinyeditor"
import Category from "./category"
import Projects from "./projects"



export default function Articles({ title }) {

    let [editing, setediting] = useState(null);
    function newarticle() {
        setediting(true);
    }
    async function Tableproject(){
        let req=await fetch('../../backend/tableproject.php',{ method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ address:inputAddres.current.value , services:inputServices.current.value }) })
        let res=await req.json();
        if(!res.ok){
            alert("ارتباط با سرور برای ذخیره پروژه جدید ناموفق بود")
        }
    }

    if (title != "پروژه ها") {
        if (!setediting) {
            return (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>ویرایش/حذف</th>
                                <th>عنوان مقاله</th>
                                <th>شماره</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Category title={title} setediting={setediting} />
                        </tbody>
                    </table>
                    <div className="newArticle">
                        <button className="add" onClick={() => { newarticle() }}>&#x2B;</button>
                    </div>
                </>
            )
        }else{
            return(<>
                <Tinyeditor/>
            </>)
        }
    } else {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>حذف</th>
                            <th>سرویس ها</th>
                            <th>آدرس پروژه</th>
                            <th>شماره</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Projects />
                    </tbody>
                </table>
                <div className="newProject">
                    <button className="add" onClick={() => {Tableproject()}}>&#x2B;</button>
                    <input type="text" ref={inputServices} id="inputServices" placeholder="سرویس ها" />
                    <input type="text" ref={inputAddres} id="inputAddres" placeholder="آدرس پروژه جدید" />
                </div>
            </>
        )
    }
}