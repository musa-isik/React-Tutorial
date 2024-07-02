import React from 'react'
import './css/Header.css'
function Header({titleText}) {

    
  return (
    <div className='header'>
      <div className='title'>UDEMY KURSLARIM {titleText}</div>
    </div>
  )
}

export default Header
