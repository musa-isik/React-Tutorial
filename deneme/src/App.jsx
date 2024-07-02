import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)
  for(var i=0;i<10; i++){
    console.log(i)
  }
  return (
    
    <div>login
      <Login/>    
    </div>  
  )
}

export default App
