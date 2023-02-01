import Nav from "../../components/Nav"
import WivordApp from "../../components/WivordApp"

//API Link: http://random-word-api.herokuapp.com/home

export default function WivordHome(){
    return (
        <div>
            <Nav />
            <div id="WivordHome">
                <h1 align="center">Wivord!</h1>
                <WivordApp />
            </div>
        </div>
    )
}