import React, { useState } from 'react'
import './Button.css'

function Button({setFoto}) {

  return (
    <div className='button'>
      <button className='botao' onClick={()=>{setFoto("./images/img1")}}>TROCAR</button>
    </div>
  )
}

export default Button
