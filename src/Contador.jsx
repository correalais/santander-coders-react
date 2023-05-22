import { useState } from "react"

export default function Contador(){

    const [count, setCount] = useState(0)

    function incrementaContador(){
        setCount(count + 1)
    }

    function diminuiContador(){
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Contador</h1>
            {count > 9 ? <h1>Valor alto</h1> : null}
            <h3>{count}</h3>
            <button onClick={incrementaContador}>Clicar pra aumentar</button>
            <button onClick={diminuiContador}>Clicar pra diminuir</button>
        </div>
    )
}