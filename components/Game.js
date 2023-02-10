export default function Game({listTry, curWord}){
    var i=0;
    function addI(){
        i++
    }

    /* Purpose: returns the color to display*/
    const checkLetter = (item) => {
        if(curWord.length === 0){return ""}
        if(item.value.length === 0){return ""}
        return (" "+item.color)
    }

    /* Purpose: Renders the options*/
    const renderOptions = (item,row) => {
        return(
            <p className={"gameOptions"+ checkLetter(item)} id={'Cell'+i}key={i}>{addI()}{item.value}</p>
        )
    }

    return(
        <div id="wivordBoard">
            {/*listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => renderOptions(item,row))}</div>)*/}
            {listTry.map(row => <div className="wivordRow" key={i}>{row.map(item => renderOptions(item,row))}</div>)}
        </div>
    )
}