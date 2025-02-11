import React, { useState } from 'react'
import  './Gerador.css'
import Button from './Button'


function Gerador() {
    const [foto, setFoto] = useState("./images/download.jpg");

    const imagens = [
        "./images/download.jpg",
        "./images/img1.jpg",
        "./images/img2.jpg",
        "./images/img3.jpg"
      ];

      function mudarFoto() {
        const nextFoto = imagens[(imagens.indexOf(foto) + 1) % imagens.length]; // Avança para a próxima imagem
        setFoto(nextFoto);
      }

    function Button() {
        return (
          <div className='button'>
            <button className='botao' onClick={(mudarFoto)}>TROCAR</button>
          </div>
        )
      }


    return (
        <div className='gerador'>
            <div className='local-imagem'>
                <img className='imagem' src={foto} />
            </div>

           <Button setFoto={setFoto}/>

        </div>
    )
}

export default Gerador
