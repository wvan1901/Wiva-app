import SelectWord from "./SelectWord";
import Game from "./Game";
import GameOptions from "./GameOptions";
import { useState } from "react";

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

    //1) add to currrent Try 2) If try is full compare ans else cont 
    //3) if ans is correct winner! else next row 4) if out of rows then lost
    function toggleLetter(theLetter){
        console.log(theLetter)
        //In the word
        // if(curWord.toUpperCase().includes(theLetter)){
        //     letterInWord()
        //     return
        // }
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
        //2)
        if(emptyIndex>newCurRow.length-2){
            checkAns()
        }
        
    }

    function letterInWord(){
        console.log("Letter in the word!")
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
    return(
        <div>
            Wivord!
            <SelectWord setCurWord={setCurWord} setBoard={setBoard}/>
            <Game listTry={listTry}/>
            <GameOptions listLetters={listLetters} toggleLetter={toggleLetter}/>
            <button onClick={checkAns}>Enter</button>
            {(gameStatus === "Pending") ? <p>Good luck!</p>: ((gameStatus === "Won") ? <p>You Won!</p> : <p>You lost!</p>)}
        </div>
    )
}