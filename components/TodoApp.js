import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

/****
    * This is React component that Holds the Todo App
*****/
export default function TodoApp(){
    const [todoList, setTodoList] = useState([])
    const todoNameRef = useRef()

    /* On click function for add buttton, checks for duplicate name + empty name*/
    function addClick(e){
        const name= todoNameRef.current.value
        if(name === ""){return}
        const checkDuplicate = todoList.find(todo => todo.name === name)
        if(typeof(checkDuplicate) !== 'undefined' ){
            todoNameRef.current.value = null
            return
        }
        setTodoList(prevTodoList => {
            return [...prevTodoList, {name:name, isChecked:false}]
        })
        todoNameRef.current.value = null
    }

    /* On click funtion for clear button, clears checked todos */
    function clearClick(){
        const newTodoList = todoList.filter(todo => !todo.isChecked)
        setTodoList(newTodoList)
    }
    
    /* Changes isChecked for todo and updates todoList */
    function checkTodo(name){
        const newTodoList = [...todoList]
        const todo = newTodoList.find(todo => todo.name === name)
        todo.isChecked = !todo.isChecked
        setTodoList(newTodoList)
    }

    return(
        <div>
            <input type="text" ref={todoNameRef}/>
            <button onClick={addClick}>Add</button>
            <button onClick={clearClick}>Clear</button>
            <br/>
            <TodoList 
                todoList={todoList} 
                setTodoList={setTodoList}
                checkTodo={checkTodo}
            />
        </div>
    )
}