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

    function toggleLetter(name){
        console.log(name)
        //In the word
        if(curWord.toUpperCase().includes(name)){
            letterInWord()
            return
        }
        const newListLetters = [...listLetters]
        const listLetter = newListLetters.find(aLetter => aLetter.letter === name)
        listLetter.isClicked = !listLetter.isClicked
        setListLetters(newListLetters)
        console.log(listLetters)

        //const todo = newTodoList.find(todo => todo.name === name)
        //todo.isChecked = !todo.isChecked
        //setTodoList(newTodoList)

        //Check Win
    }

    function letterInWord(){
        console.log("Letter in the word!")
    }

    function setBoard(i){
        const testBoard = Array(5).fill(Array(i).fill(""))
        setListTry(testBoard)
    }
    return(
        <div>
            Wivord!
            <SelectWord setCurWord={setCurWord} setBoard={setBoard}/>
            <Game listTry={listTry}/>
            <GameOptions listLetters={listLetters} toggleLetter={toggleLetter}/>
        </div>
    )
}