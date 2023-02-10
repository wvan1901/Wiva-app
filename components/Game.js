import { useState } from "react"
// TODO: Refactor List
export default function Game({listTry, curWord}){
    const [color, setColor]=useState('grey')
    var letterIndex = 0

    const colors = ["grey","green", "yellow"]

    var i=0;
    function addI(){
        i++
    }

    function getColors(){
        return (" "+ color) 
    }

    const checkLetter = (item,row) => {
        if(curWord.length === 0){return ""}
        if(item.length === 0){return ""}

        const newIndex = (letterIndex < curWord.length-1 )? letterIndex+1:0
        if(item === curWord.charAt(letterIndex)){
            letterIndex = newIndex
            return " green"
        } else {
            if(curWord.includes(item)){
                letterIndex = newIndex
                return " yellow"
            }
        }
        letterIndex = newIndex
        return ""
    }

    const renderOptions = (item,row) => {
        return(
            <p className={"gameOptions"+ checkLetter(item.value,row)} id={'Cell'+i}key={i}>{addI()}{item.value}</p>
        )
    }

    return(
        <div id="wivordBoard">
            {/*listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => renderOptions(item,row))}</div>)*/}
            {listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => renderOptions(item,row))}</div>)}
        </div>
    )
}