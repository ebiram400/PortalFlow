import { useEffect, useState } from "react"


export default function Employers({ setreporting }) {


    useEffect(() => {
        async () => {
            let req = await fetch("../../backend/employers.php")
            let [res, setres] = useState(await req.json())
        }
    }, [])

    async function Removeuser(id) {
        let reques = await fetch('../../backend/removeuser.php', { method: 'post', headers: { 'accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) });
        let respons = await reques.json()
        if (!respons.ok) {
            alert('ارتباط با سرور برای حذف کارفرما برقرار نشد')
        } else {
            setres(res.filter(element => element.id !== id))
        }
    }

    if (res.ok) {
        return (
            res.map((element, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div className="text-center" id="reports" onClick={() => { setreporting(element.id) }}>گزارشات <span
                                className="material-symbols-outlined d-block">lab_profile</span></div>
                        </td>
                        <td>
                            <div className="text-center" id="clearUser" onClick={() => { Removeuser(element.id) }}>حذف <span
                                className="material-symbols-outlined d-block">Delete_Forever</span></div>
                        </td>
                        <td style={{ fontFamily: `Times` }}>{element.tel}</td>
                        <td> {element.user_name} </td>
                        <td> {element.project_name}</td>
                    </tr>
                )
            })
        )
    }

}