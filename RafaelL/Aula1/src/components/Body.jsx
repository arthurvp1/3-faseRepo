import React, { useState } from 'react'
import './Body.css'

function Body() {
    
    var pontos;
    const [pontinhos, setPontinhos] = useState();

    // function tratarClique1(){

    //         ; 
           
    //         alert(pontos)
        
    // }
    function tratarClique2(){

           setPontinhos(pontos); 
          
            // alert(pontos)
        
    }

  return (
    <div className='container-body'>
      <h1>Body</h1>
      {/* { <button onClick={tratarClique1}>Clica em mim</button><br /> */}
      <button onClick={tratarClique2}>aiaiai</button> 
      {pontinhos}


    </div>
    
  )
}

export default Body
