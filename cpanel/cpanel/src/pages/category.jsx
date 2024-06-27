import { useState } from "react";
import Tinyeditor from 'tinyeditor'

export default function Category({ title ,setediting}) {

    let [res, setres] = useState(null);

    async function Delarticle(id) {
        let req = await fetch('removeArticle.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }) });
        let res = await req.json();
        if (!res.ok) {
            alert("ارتباط با سرور برای حذف برقرار نشد")
        } else {
            setres(res.filter(element => element.id !== id))
        }
    }

    function Editarticle(editingid){
        setediting(editingid);
    }



    useEffect(() => {
        async () => {
            let response = await fetch('../../backend/category.php', { method: 'post', headers: { 'Accept': '*/*', 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title }) })
            setres(await response.json());
        }
    }, [])
    if (!res) {
        return (<img src="../../public/loding.svg" />)
    } else if (!res.ok) {
        return (<div>اتصال با سرور دچار مشکل شده است</div>)
    } else {
        if (!editing) {
            return (
                <>
                    {res.map((element) => {
                        <tr key={element.id}>
                            <td>
                                <button className="remove" onClick={() => { Delarticle(element.id) }}>&#x2715;</button>
                                <button className="edit" onClick={() => { Editarticle(element.id) }}>&#x270F;</button>
                            </td>
                            <td>{element.title}</td>
                            <td>{element.id}</td>
                        </tr>
                    })}
                </>
            )
        } else {
            return (
                <>
                    <Tinyeditor id={editingid} setediting={setediting}/>
                </>
            )
        }
    }
}