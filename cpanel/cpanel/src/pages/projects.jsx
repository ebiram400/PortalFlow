import { useEffect, useState } from "react"


export default function Projects() {
    let [res, setres] = useState(null)

    async function DelProject(id) {
        let req = await fetch('../../backend/removeProjects.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) });
        let result = await req.json();
        if (!result.ok) {
            alert("ارتباط با سرور برای حذف برقرار نشد")
        } else {
            setres(res.filter(element => element.id !== id))
        }
    }

    useEffect(() => {
        async () => {
            let response = await fetch('../../backend/projects.php')
            setres(await response.json());
        }
    }, [])
    if (!res) {
        return (<img src="../../public/loding.svg" />)
    } else if (!res.ok) {
        return (<div>اتصال با سرور دچار مشکل شده است</div>)
    } else {
        return (
            <>
                {res.map((element) => {
                    <tr key={element.id}>
                        <td><button className="remove" onClick={() => { DelProject(element.id) }}>&#x2715;</button></td>
                        <td>{element.services}</td>
                        <td>{element.address}</td>
                        <td>{element.id}</td>
                    </tr>
                })}
            </>
        )
    }
}