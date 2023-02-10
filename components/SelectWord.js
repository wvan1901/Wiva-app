import { useRef, useState } from "react"

//Does an API call with user desired lengh
export default function SelectWord({setCurWord, setBoard, words}){
    const numberRef = useRef()

    const url = "https://random-word-api.herokuapp.com/word?length="

    function genWord(){
        const theNum = numberRef.current.value
        if(theNum === ""){return}
        callAPI()
    }

    const callAPI = async () => {
        const newUrl = url+numberRef.current.value
        try{
            const res = await fetch(newUrl)
            const data = await res.json()
            const newWord = data[0]
            console.log("Word: "+newWord)
            if(!words.check(newWord)){
                console.log("Recevied Improper Word!")
                return
            }
            setCurWord(newWord.toUpperCase())
            setBoard(newWord.length)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            length:
            <input type="number" ref={numberRef} min="4" max="7"/>
            <button onClick={genWord}>Gen</button>
        </div>
    )
}