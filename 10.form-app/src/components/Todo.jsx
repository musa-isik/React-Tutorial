import React, { useState } from 'react'
import {IoIosRemoveCircle} from "react-icons/io"
import {FaEdit} from 'react-icons/fa'
import '../App.css'
import {FaCheck} from 'react-icons/fa'

function Todo({ todo ,onRemoveTodo,onUpdateTodo}) {

    const [editTable,setEditTable] = useState(false);
    const [newTodo,setNewTodo] = useState(todo.content)

    const removeTodo = ()=>{
        onRemoveTodo(todo.id)
    }

    const updateTodo = ()=>{
        const request ={
            id:todo.id,
            content:newTodo
        }
        onUpdateTodo(request)
        setEditTable(false)
    }  

  return (
    <div style={{display:"flex" , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between" ,padding:"10px",marginTop:"10px"}}>
      <div >
        {
            editTable ? <input className='todo-input' type='text' 
            style={{width:"380px"}} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/> : todo.content
        }
        </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
        {
            editTable ?  <FaCheck className='todo-icons' onClick={updateTodo}/> : <FaEdit  className='todo-icons' onClick={()=>setEditTable(true)}/> 
        }
        
        
      </div>
    </div>
  )
}

export default Todo
