import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  // callback fonksiyonlar bir metoda parametre olarak bir fonksiyonu vermek
  useEffect(()=>{
    console.log("her zaman çalışır") // herhangi bir statenin değişmesinden etkilenir ve çalışır
  })

  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır")
  },[])


  useEffect(()=>{
    console.log("component ilk render edildiğinde ve firstName set edildiğinde çalışır")
  },[firstName])


  useEffect(()=>{
    console.log("component ilk render edildiğinde ve lastName set edildiğinde çalışır")
  },[lastName])

  return (
   <div>
    <div><button onClick={()=>{setFirstName("degisen ad")}}>Adı değiştir</button></div>
    <div><button onClick={()=>{setLastName("degisen soyad")}}>soyad değiştir</button></div>
   
   </div>
  )
}

export default App
