import SelectWord from "./SelectWord";
import Game from "./Game";
import GameOptions from "./GameOptions";
import { useState } from "react";

/*
    https://www.npmjs.com/package/check-if-word?activeTab=readme
    I have installed npm above to check for words will use eventualy
*/

export default function WivordApp(){
    //Below is what is used to check if its a word
    const checkWord = require('check-if-word'),words = checkWord('en');
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
    const [wordStatus, setWordStatus] = useState("Pending")

    /* Purpose: Grabs a letter and adds it to curTry */
    function toggleLetter(theLetter){
        console.log(theLetter)
        //If above curTry max (which is hardcoded to 4) it returns
        if(curTry >4){return}
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const i = (index) => (index.value === "")
        const emptyIndex = newCurRow.findIndex(i)
        const updatedLetter = {value:theLetter, color:"grey"}
        newCurRow.fill(updatedLetter,emptyIndex,emptyIndex+1)
        setListTry(newListTry)
    }

    /* Purpose: Creates a new board with 5 rows and i colums and fills with default values*/
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

    /* Purpose: If letter isnt in word then disabled the letter*/
    function blockLetter(theLetter){
        const newListLetters = [...listLetters]
        const listLetter = newListLetters.find(aLetter => aLetter.letter === theLetter)
        listLetter.isClicked = !listLetter.isClicked
        setListLetters(newListLetters)
    }

    /* Purpose: When enter is Clicked it checks the answer and colors the appropiate letters and if all correct then sets status to Won
        then contines to next row until last row and if hast won after last row then status is set to Lost */
    function checkAns(){
        console.log("checking Ans")
        if(curTry>4){return}
        //Checks if enough letters if not then returns
        if((listTry.at(curTry).map((item) => item.value).join("").length) < curWord.length){
            //console.log("ERROR!")
            return
        }
        //Checks if answer is correct
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const userAns = newCurRow.map((item) => item.value).join("")
        //Checks if answer is a word
        if(!isWord(userAns)){return}
        if(userAns === curWord){
            setGameStatus("Won")
            listTry.at(curTry).map(item => item.color = "green")
            setCurTry(5)
            return
        }
        if((userAns !== curWord)&&(curTry === 4)){
            setGameStatus("Lost")
            return
        }
        const newTry = curTry +1
        setCurTry(newTry)
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

    /* Purpose: Deletes letter from current try*/
    function delLetter(){
        if(curWord.length === 0){return}
        setWordStatus("Pending")
        //If above curTry max (which is hardcoded to 4) it returns
        if(curTry >4){return}
        console.log("Deleting Letter")
        if(listTry.at(curTry).map((item) => item.value).join("").length < 1 ){
            console.log("Cant delete")
            return
        }
        const newListTry = [...listTry]
        const newCurRow = newListTry.at(curTry)
        const emptyIndex = newCurRow.map((item) => item.value).join("").length-1
        const updatedLetter = {value:"", color:"grey"}
        newCurRow.fill(updatedLetter,emptyIndex,emptyIndex+1)
        setListTry(newListTry)
    }

    /* Checks if given param is a word and returns boolean*/
    function isWord(wordAns){
        const isIt = words.check(wordAns)
        if(isIt){setWordStatus("Pending")}
        else{setWordStatus("Error")}
        //return true
        return isIt
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
            {(wordStatus === "Pending") ? <p></p>:((wordStatus === "Error") ? <p>Not a Word!</p>:<p></p>)}
        </div>
    )
}