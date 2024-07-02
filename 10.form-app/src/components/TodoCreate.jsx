import React, { useState } from 'react'
import '../App.css';

function TodoCreate({onCreateTodo}) {
  
  const [newTodo,setNewTodo] = useState('')

  const createTodo = () =>{
    if(!newTodo) return;
    const request = {
      id: Math.floor(Math.random()*9999),
      content: newTodo
    }
    
    const setClearInput =()=>{
      setNewTodo('')
    }
    onCreateTodo(request)
    setClearInput()
  }

  return (
    <div className='todo-create'>
      <input className='todo-input' type="text" placeholder='Todo giriniz'
      onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} />
      <button className='todo-create-button' onClick={createTodo}>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate
