import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../../../../bootstrap/dist/css/bootstrap.min.css"



export default function Login() {
    let [isadmin, setisadmin] = useState(0);

    useEffect(() => {
        async function Api() {
            fetch('http://localhost/moein/cpanel/cpanel/backend/session-login-panel.php')
                .then((res) => res.json())
                .then((data) => {
                    if (data.isadmin == 'yes') {
                        setisadmin(1)
                    } else {
                        setisadmin(-1)
                    }
                })
        }
        Api()
    },[])


    let navigate = useNavigate()
    if (isadmin == 0) {
        return (
            <img src="../../public/loding.svg" className="position-absolute top-50 start-50 translate-middle" />
        )
    }
    if (isadmin == 1) {
        navigate('/base')
    }
    if (isadmin == -1) {
        navigate('/form')
    }

}