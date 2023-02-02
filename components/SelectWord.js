import { useRef } from "react"

//For now takes the value and sets it as the word
//Need to fix to call API
export default function SelectWord({setCurWord, setBoard}){
    const textRef = useRef()
    function genWord(){
        const word = textRef.current.value
        if(word === ""){return}
        setCurWord(word.toUpperCase())
        textRef.current.value = null
        console.log("Word: "+ word)
        setBoard(word.length)
    }
    return(
        <div>
            length:
            <input type="text" ref={textRef}/>
            <button onClick={genWord}>Gen</button>
        </div>
    )
}