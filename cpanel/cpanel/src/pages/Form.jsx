import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    let adminName = useRef(null);
    let adminPass = useRef(null);
    let navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        let name = adminName.current.value;
        let pass = adminPass.current.value;

        fetch('../../backend/submitLogin.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'Application/json' }, body: JSON.stringify({ name: name, pass: pass }) })
            .then(response => response.json())
            .then(result => {
                if (result.end == 'ok') {
                    navigate('/base')
                } else {
                    alert("این صفحه مخصوص ورود مدیریت سایت است");
                }
            })
    }

    return (
        <>
            <form className="d-flex flex-column align-items-center gap-2 text-center mt-5" onSubmit={(e) => submitHandler(e)}>
                <input type="text" name="adminName" id="adminName" ref={adminName} />
                <input type="text" name="adminpass" id="adminpass" ref={adminPass} />
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}