import React from 'react'
import TodoItem from './TodoItem.jsx'

const Todos = (props) => {
    return(
        <div className = "container">
            <h3>My Todo List</h3>
            {
                props.todos.length == 0? "No todos to display" :
                props.todos.map((todo) =>{
                    return <TodoItem todo = {todo} onDelete = {props.onDelete}/>
                })
            }
            
        </div>
    )
}

export default Todos
