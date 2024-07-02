import { useState } from 'react'
import './App.css'

function App() {
  const [vize, setVize] = useState()
  const [final, setFinal] = useState()

  const ortalama = () =>{
    debugger
    const toplamSonuc = topla()/2
    yazdir(toplamSonuc);
  }

  const topla = () =>{
    debugger
    var toplam = vize+final
    return toplam
  }

  const yazdir = (sonuc) =>{
    console.log("ortalama : "+sonuc)
  }

  return (
    <div>
      <div>
          <input type="number" value={vize} onChange={(e)=>{setVize(Number(e.target.value))}}/>
      </div>
      
      <div>
          <input type="number" value={final} onChange={(e)=>{setFinal(Number(e.target.value))}}/>
      </div>
      <div>
        <button onClick={ortalama}>ortalama al</button>
      </div>
    </div>
  )
}

export default App
