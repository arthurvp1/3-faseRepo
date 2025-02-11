import React, { useState } from 'react'
import  './Gerador.css'
import Button from './Button'


function Gerador() {
    const [foto, setFoto] = useState("./images/download.jpg");

    const imagens = [
        "./images/img1.jpg",
        "./images/img2.jpg",
        "./images/img3.jpg",
        "./images/img4.jpg",
        "./images/img5.jpg",
        "./images/img6.png",
        "./images/img7.png"
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
