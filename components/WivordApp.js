import SelectWord from "./SelectWord";
import Game from "./Game";
import GameOptions from "./GameOptions";
import { useState } from "react";

/*
    https://www.npmjs.com/package/check-if-word?activeTab=readme
    I have installed npm above to check for words will use eventualy
*/

export default function WivordApp(){
    const [listLetters, setListLetters] = useState([
        {letter:"A", isClicked:false}, {letter:"B", isClicked:false}, {letter:"C", isClicked:false}, {letter:"D", isClicked:false}, {letter:"E", isClicked:false},
        {letter:"F", isClicked:false}, {letter:"G", isClicked:false}, {letter:"H", isClicked:false}, {letter:"I", isClicked:false}, {letter:"J", isClicked:false},
        {letter:"K", isClicked:false}, {letter:"L", isClicked:false}, {letter:"M", isClicked:false}, {letter:"N", isClicked:false}, {letter:"O", isClicked:false},
        {letter:"P", isClicked:false}, {letter:"Q", isClicked:false}, {letter:"R", isClicked:false}, {letter:"S", isClicked:false}, {letter:"T", isClicked:false},
        {letter:"U", isClicked:false}, {letter:"V", isClicked:false}, {letter:"W", isClicked:false}, {letter:"X", isClicked:false}, {letter:"Y", isClicked:false},{letter:"Z", isClicked:false}
    ])

    const [listTry, setListTry] = useState([
        [{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"}],
        [{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"}],
        [{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"}],
        [{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"}],
        [{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"},{value:"", color:"grey"}]
    ])

    const [curWord, setCurWord] = useState("")
    const [curTry,setCurTry] = useState(0)
    const [gameStatus, setGameStatus] = useState("Pending")

    //1) add to currrent Try 
    function toggleLetter(theLetter){
        console.log(theLetter)
        //In the word
        //1)
        if(curTry >4){return}
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const i = (index) => (index.value === "")
        const emptyIndex = newCurRow.findIndex(i)
        const updatedLetter = {value:theLetter, color:"grey"}
        newCurRow.fill(updatedLetter,emptyIndex,emptyIndex+1)
        setListTry(newListTry)
    }

    function setBoard(i){
        //Dont use Array(5).fill(Array(i).fill("")) it creates a array with reference of the same array so  it duplicates
        //const testBoard = Array(5).fill(Array(i).fill(""))
        const newDefault = () => {
            const fillerObjects = {value:"", color:"grey"}
            return fillerObjects
        }
        const testBoard = [...new Array(5)].map(() => [...new Array(i)].map(newDefault))
        setListTry(testBoard)
    }

    function blockLetter(theLetter){
        const newListLetters = [...listLetters]
        const listLetter = newListLetters.find(aLetter => aLetter.letter === theLetter)
        listLetter.isClicked = !listLetter.isClicked
        setListLetters(newListLetters)
    }

    function checkAns(){
        console.log("checking Ans")
        if((listTry.at(curTry).map((item) => item.value).join("").length) < curWord.length){
            //console.log("ERROR!")
            return
        }
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const userAns = newCurRow.map((item) => item.value).join("")
        if(userAns === curWord){
            setGameStatus("Won")
            listTry.at(curTry).map(item => item.color = "green")
            return
        }
        if((userAns !== curWord)&&(curTry === 4)){
            setGameStatus("Lost")
            return
        }
        const newTry = curTry +1
        setCurTry(newTry)
        //Block Wrong letters
        //Blocks Letters not in word
        newCurRow.forEach(i => {if(!curWord.includes(i.value)){blockLetter(i.value)}})
        //Change colors
        var letterIndex = 0
        const colorChanger = (item) => {
            if(item.value === curWord.charAt(letterIndex)){
                item.color = "green"
            } else {
                if(curWord.includes(item.value) && (item.value.length>0)){
                    item.color = "yellow"
                }
            }
            letterIndex = (letterIndex < curWord.length-1 )? letterIndex+1:0
            return item
        }
        listTry.map((row) => row.map(i => colorChanger(i)))
    }

    function delLetter(){
        if(curWord.length === 0){return}
        console.log("TODO: Delete Letter")
        if(listTry.at(curTry).map((item) => item.value).join("").length < 1 ){
            console.log("Cant delete")
            return
        }
    }

    return(
        <div>
            Wivord!
            <SelectWord setCurWord={setCurWord} setBoard={setBoard}/>
            <Game listTry={listTry} curWord={curWord}/>
            <GameOptions listLetters={listLetters} toggleLetter={toggleLetter}/>
            <button onClick={checkAns}>Enter</button>
            <button onClick={delLetter}>Delete</button>
            {(gameStatus === "Pending") ? <p>Good luck!</p>: ((gameStatus === "Won") ? <p>You Won!</p> : <p>You lost!</p>)}
        </div>
    )
}