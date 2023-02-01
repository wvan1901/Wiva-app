import Todo from "./Todo"

export default function TodoList({todoList, setTodoList, checkTodo}){
    return(
        <div>
            {(!todoList?.length) ? <p>List is empty, try Adding something!</p>:<p>TodoList:</p>}
            <br/>
            {todoList.map(item => <Todo key={item.name} todo={item} setTodoList={setTodoList} checkTodo={checkTodo}/>)}
        </div>
    )
}