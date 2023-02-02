import Options from "./Options"

export default function GameOptions({listLetters, toggleLetter}){
    return(
        <div>
            GameOptions!
            {listLetters.map(letter => <Options key={letter.letter} letter={letter} toggleLetter={toggleLetter}/>)}
        </div>
    )
}