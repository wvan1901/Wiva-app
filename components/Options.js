export default function Options({letter, toggleLetter}){
    function addLetter(){
        toggleLetter(letter.letter)
    }
    return(
        <button key={letter.letter} onClick={addLetter} disabled={letter.isClicked}>{letter.letter}</button>
    )
}