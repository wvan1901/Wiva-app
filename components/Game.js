import { useState } from "react"

export default function Game({listTry}){
    const [index, setIndex] = useState(0)
    var i=0;
    function addI(){
        i++
    }
    return(
        <div>
            {listTry.map(row => (row.map(item => <p key={i}>{addI()}{item} | </p>)))}
        </div>
    )
}