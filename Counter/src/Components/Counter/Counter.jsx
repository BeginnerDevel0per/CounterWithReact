import { useState } from 'react'
import "./Counter.css"
import { useParams } from 'react-router-dom'
function Counter() {
    const {count}= useParams();
    const [result,setResult]=useState(0);
    return (
        <>
            <h3>Arttırma ve azaltma miktarı = <strong>{count}</strong></h3>
            <h1>{result}</h1>
            <div className='btn-group'>
                <button onClick={()=>{setResult(Number(result)-Number(count))}}>Azalt</button>
                <button onClick={()=>{setResult(Number(result)+Number(count))}}>Arttır</button>
            </div>
        </>
    )
}

export default Counter
