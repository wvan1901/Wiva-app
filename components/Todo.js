/* Displays the Todo with a <input> + todo.name */
export default function Todo({todo, setTodoList, checkTodo}){
    function onClick(){
        checkTodo(todo.name)
    }
    return(
        <div>
            <input type="checkbox" checked={Todo.isChecked} onChange={onClick}/>
            {todo.name}
        </div>
    )
}