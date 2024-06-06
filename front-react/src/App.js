import "./app.css"

export default function App({name="rahim",age,gen}) {
    //------when i use spreed convert obj to array------
    // let users=[];
    // for(let i = 0; i < Object.keys(props).length; i++){
    //     users[users.length]=Object.values(props[i]);
    // }

    return (
        <div className="container">
            <div className="card"><h1>{name}</h1><h2>{age}</h2><h2>{gen}</h2></div>
        </div>
    )
}
