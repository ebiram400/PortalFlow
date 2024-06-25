

export default function Category({title}){

    let [res,setres]=useState(null)

    async function Delarticle(id){
        let req=await fetch('removeArticle.php',{method:'post',headers:{'Accept':'*/*','Content-Type':'application/json'},body:JSON.stringify({id:id})});
        let res=await req.json();
        if(!res.ok){
            alert("ارتباط با سرور برای حذف برقرار نشد")
        }else{
            setres(res.filter(element=> element.id !==id))
        }
    }

    useEffect(()=>{
        async()=>{
            let response=await fetch('../../backend/category.php',{method:'post',headers:{'Accept':'*/*','Content-Type':'application/json'},body:JSON.stringify({title:title})})
            setres(await response.json());
        }
    },[])
    if(!res){
        return (<img src="../../public/loding.svg" />)
    }else if(!res.ok){
        return (<div>اتصال با سرور دچار مشکل شده است</div>)
    }else{
        return(
        <>
            {res.map((element)=>{
                <tr key={element.id}>
                    <td>
                        <button className="remove" onClick={()=>{Delarticle(element.id)}}>&#x2715;</button>
                        <button className="edit" onClick={()=>{Editarticle(element.id)}}>&#x270F;</button>
                    </td>
                    <td>{element.title}</td>
                    <td>{element.id}</td>
                </tr>
            })}
        </>
        )
    }
}