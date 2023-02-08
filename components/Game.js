import { useState } from "react"

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
        //letterIndex = newIndex
        //console.log([item,curWord.charAt(letterIndex)])
        if(item === curWord.charAt(letterIndex)){
            //console.log(["Letter in Spot!",curWord.charAt(letterIndex)])
            letterIndex = newIndex
            return " green"
        } else {
            if(curWord.includes(item)){
                //console.log(["Letter in Word!",curWord.charAt(letterIndex)])
                letterIndex = newIndex
                return " yellow"
            }
        }
        //console.log([item,row])
        letterIndex = newIndex
        //console.log([letterIndex,newIndex])
        return ""
    }

    const renderOptions = (item,row) => {
        return(
            <p className={"gameOptions"+ checkLetter(item,row)} id={'Cell'+i}key={i}>{addI()}{item}</p>
        )
    }

    return(
        <div id="wivordBoard">
            {/*listTry.map(row => (row.map(item => <p id={'Cell'+i}key={i}>{addI()}{item} | </p>)))*/}
            {/*listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => <p className="gameOptions" id={'Cell'+i}key={i}>{addI()}{item}</p>)}</div>)*/}
            {listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => renderOptions(item,row))}</div>)}
        </div>
    )
}