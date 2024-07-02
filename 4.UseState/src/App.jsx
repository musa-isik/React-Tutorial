import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // int a = 0;
  const [deneme, setDeneme] = useState(''); // String deneme = '';
  const [firstName, setFirstName] = useState('Musa'); // String firstNameSec = 'Musa';
  const [lastName, setLastName] = useState('Işık'); // String firstNameSec = 'Musa';
  
  function setVariable(){
    setFirstName('ümit')
    setLastName('deneme')
  }
  function arttir(){
    setCount(count+1)
  }
  const azalt = ()=>{
    setCount(count-1)
  }
  return (
    /*
    <div>
     <div>{firstName} {lastName}</div>
     <div>
        <button onClick={setVariable} >isim değiş</button>
     </div>
    </div>*/
    
    <div>
      <div>{count}</div>
      <div><button onClick={arttir}>arttır</button> <button onClick={azalt}>azalt</button></div>
    </div>
    
  )
}

export default App
