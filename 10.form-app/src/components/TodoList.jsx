import React from 'react'
import Todo from './Todo'


function TodoList({ todos ,onRemoveTodo , onUpdateTodo}) {
  return (
    <div style={{ width: "100%", border:"1px solid lightgrey" , marginTop:"10px", padding:"5 px", borderRadius:"10px"}} >
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
        ))
      }
    </div>
  )
}

export default TodoList