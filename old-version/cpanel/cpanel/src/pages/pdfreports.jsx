import { useEffect, useState } from "react"



export default function Pdfreports(reporting) {

    function Showpdf(filename) {
        let url = "../../../../pdf/" + filename;
        window.open(url, "_blank");
    }

    async function Removepdf(id) {
        let req = await fetch('http://localhost/moein/cpanel/cpanel/backend/removepdf.php', { method: 'post', headers: { 'accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) });
        let res = await req.json();
        if (!res.ok) { alert('ارتباط با سرور برای حذف گزارش برقرار نشد') }
        else {
            setrespons(respons.filter(element=>element.id != id))
        }
    }

    useEffect(() => {
        async () => {
            let reques = await fetch('http://localhost/moein/cpanel/cpanel/backend/reportsmaster.php', { method: 'post', headers: { 'accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ userid: reporting }) })
            let [respons, setrespons] = useState(await reques.json());
            if (!respons.ok) { alert('ارتباط با سرور برای نمایش گزارشات برقرار نشد') }
        }
    }, [])

    if (respons.ok) {
        return (
            respons.map((element, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div className="text-center" id="showReport" onClick={() => { Showpdf(element.filename) }}>نمایش <span
                                className="material-symbols-outlined d-block">lab_profile</span></div>
                        </td>
                        <td>
                            <div className="text-center" id="clearReport" onClick={() => { Removepdf(element.id) }} >حذف <span
                                className="material-symbols-outlined d-block">Delete_Forever</span></div>
                        </td>
                        <td>{element.filename}</td>
                    </tr>
                )
            })
        )
    }
}