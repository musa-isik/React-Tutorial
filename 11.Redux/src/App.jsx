import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';


function App() {
  const dispatch = useDispatch();

  const state = useSelector((store)=>store.counter);
  console.log(state)

  return (
    <div>
      <div>{state.value}</div>
      <div><button onClick={()=>dispatch(increment())}>Arttır</button> <div><button onClick={()=>dispatch(decrement())}>Azalt</button></div></div>
    </div>
  )
}

export default App
