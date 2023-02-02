import { useState } from "react"

export default function Game({listTry}){
    const [index, setIndex] = useState(0)
    var i=0;
    function addI(){
        i++
    }
    return(
        <div id="wivordBoard">
            {/*listTry.map(row => (row.map(item => <p id={'Cell'+i}key={i}>{addI()}{item} | </p>)))*/}
            {listTry.map(row => <div class="wivordRow" key={i}>{row.map(item => <p id={'Cell'+i}key={i}>{addI()}{item} | </p>)}</div>)}
        </div>
    )
}