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
        ["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]
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
        const newEntry = newCurRow.find(replaceLetter => replaceLetter === "")
        const i = (index) => (index === "")
        const emptyIndex = newCurRow.findIndex(i)
        newCurRow.fill(theLetter, emptyIndex, emptyIndex+1)
        setListTry(newListTry)
        //console.log([newCurRow,newEntry,emptyIndex,newListTry])
    }

    function setBoard(i){
        //Dont use Array(5).fill(Array(i).fill("")) it creates a array with reference of the same array so  it duplicates
        //const testBoard = Array(5).fill(Array(i).fill(""))
        const testBoard = [...new Array(5)].map(() => [...new Array(i)].map(() => ""))
        //console.log(testBoard)
        setListTry(testBoard)
    }

    function blockLetter(theLetter){
        const newListLetters = [...listLetters]
        const listLetter = newListLetters.find(aLetter => aLetter.letter === theLetter)
        listLetter.isClicked = !listLetter.isClicked
        setListLetters(newListLetters)
        //console.log(listLetters)
    }

    function checkAns(){
        console.log("checking Ans")
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const userAns = newCurRow.join("")
        if(userAns === curWord){
            setGameStatus("Won")
            return
        }
        if((userAns !== curWord)&&(curTry === 4)){
            setGameStatus("Lost")
        }
        const newTry = curTry +1
        setCurTry(newTry)
        //Block Wrong letters
        //Blocks Letters not in word
        newCurRow.forEach(i => {if(!curWord.includes(i)){blockLetter(i)}})
    }

    function delLetter(){
        if(curWord.length === 0){return}
        console.log("TODO: Delete Letter")
        if(listTry.at(curTry).join("").length < 1 ){
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