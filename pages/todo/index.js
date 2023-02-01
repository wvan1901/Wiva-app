import Nav from "../../components/Nav"
import TodoApp from "../../components/TodoApp"

export default function TodoHome(){
    return (
        <div>
            <Nav />
            <div id="TodoHome">
                <h1 align="center">TODO!</h1>
                <TodoApp />
            </div>
        </div>
    )
}