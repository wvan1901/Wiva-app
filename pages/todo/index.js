import Nav from "../../components/Nav"
import TodoApp from "../../components/TodoApp"

export default function TodoHome(){
    return (
        <div>
            <Nav />
            <h1>TODO!</h1>
            <TodoApp />
        </div>
    )
}