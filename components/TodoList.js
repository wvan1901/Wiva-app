import Todo from "./Todo"

/* returns a message depending if list is empty, displays the todos in list as <Todo> */
export default function TodoList({todoList, setTodoList, checkTodo}){
    return(
        <div id="TodoList">
            {(!todoList?.length) ? <p>List is empty, try Adding something!</p>:<p>TodoList:</p>}
            <br/>
            {todoList.map(item => <Todo key={item.name} todo={item} setTodoList={setTodoList} checkTodo={checkTodo}/>)}
        </div>
    )
}