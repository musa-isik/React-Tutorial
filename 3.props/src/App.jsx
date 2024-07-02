import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const urun= {
    urunAdi:"buzdolabı",
    fiyat:5000
  }
  return (
    
      <div>
        {/*<Product productName="Ayakkabı" price={3200}/>
        <Product productName="Pantolon" price={950}/>
        <Product productName={urun.urunAdi} price={urun.fiyat}/>*/ }
        <Container>
          <Product productName="telefon" price={25000}/>
        </Container>

        <Container>
          <Product productName="araba" price={25000}/>
        </Container>
      </div>
  )

}

export default App
