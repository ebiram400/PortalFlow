import { useEffect, useRef } from "react"
import Pdfreports from "./pdfreports";



export default function Reports({ reporting }) {

    let level = useRef();
    let prname = useRef();

    useEffect(() => {
        async () => {
            let req = await fetch('http://localhost/moein/cpanel/cpanel/backend/usersinreport.php', { method: 'post', headers: { 'accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: reporting }) })
            let res = await req.json()
            if (!res.ok) {
                alert('ارتباط با سرور برای نمایش اطلاعات کارفرما برقرار نشد')
            } else {
                level.current.value = res.level;
                prname.current.value = res.project_name;
            }
        }
    }, [])

    return (
        <>
            <div className="d-flex flex-column align-items-center mb-4">
                <div className="fs-5 fw-bold rounded-3 mb-3" ref={prname} >نام پروژه</div>
                <div className="fs-7 fw-light mb-2">مراحل: 0-بازدید،1-قرارداد،2-شروع به کار،3-اتمام کار</div>
                <label for="level" className="fs-7">
                    <input type="text" ref={level} maxlength="1" pattern="[0-3]" /> :مرحله فعلی</label>
            </div>
            <input type="file" id="pdfinput" hidden />
            <label for="pdfinput">
                <button className="text-light bg-green fw-bold p-2 border-0 rounded-3">
                    <span>اضافه کردن گزارش</span> +</button>
            </label>
            <table className="userTable">
                <tr>
                    <td>
                        <div className="text-center" id="showReport">نمایش <span
                            className="material-symbols-outlined d-block">lab_profile</span></div>
                    </td>
                    <td>
                        <div className="text-center" id="clearReport">حذف <span
                            className="material-symbols-outlined d-block">Delete_Forever</span></div>
                    </td>
                    <td>نام فایل.pdf</td>
                </tr>
                <Pdfreports reporting={reporting} />
            </table>
        </>
    )


}