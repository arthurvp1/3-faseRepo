import React, { useState } from 'react';
import './Body.css';
import Produto from './Produto';

function Body() {

  //use state to inputs ↓↓

  const [inputNome, setInputNome] = useState('');
  const [inputPreco, setInputPreco] = useState('');
  const [inputImagem, setInputImagem] = useState('');

  const [cards, setCards] = useState([

    {
      id: Date.now(),
      nome: 'helicoptero',
      preco: 33.2,
      img: './images/helicoptero.webp',
    },

    {
      id: Date.now() + 1,
      nome: 'Carro',
      preco: 20.7,
      img: './images/carro.png',
    },
    {
      id: Date.now() + 2,
      nome: 'Flamengo',
      preco: 0.0002,
      img: './images/copo.webp',
    }



  ]);

    const [pontinhos, setPontinhos] = useState(0); 

    function cadastro(){

      if(!inputNome || !inputPreco || !inputImagem){
        alert('Todos os campos devem ser preenchidos!');
        return;
      }

      const novoCard = {
        id: Date.now()+10,
        nome: inputNome,
        preco: (parseFloat(inputPreco)),
        img: inputImagem,
      };

      setCards([...cards, novoCard]);
      setInputNome('');
      setInputPreco('');
      setInputImagem('');

    }

    function tratarClique1() {

        if(pontinhos <= 0){

          setPontinhos(0)
          confirm('Você não pode diminuir mais pontos!');
        }
        else{
          setPontinhos(pontinhos - 1); 
        }
    }

    function tratarClique2() {
        setPontinhos(pontinhos + 1); 
    }

    return (
        <div className='container-body'>
            <h1>Body</h1>
            <button onClick={tratarClique2}>Aumentar</button> 
            <button onClick={tratarClique1}>Diminuir</button> 
            <p>{pontinhos}</p>
            
            <section className='produtoss'>

            {/* <Produto nome = {"Chinelo"} preco = {1.5} img = {'./images/chinelo.png'}/> */}

            {/* <Produto nome = {"Sela Hamster"} preco = {5.3} img = {'./images/selahamster.webp'}/> */}

              {cards.map((p)=> (

                <Produto key={p.id} nome = {p.nome} preco = {p.preco} img = {p.img} />

              ) )}

            </section>

            <div className="formcadastro">

              <div className="inputcontainer">

                <label >Produto: </label>
                <input type="text"
                value={inputNome}
                onChange={(event)=>setInputNome(event.target.value)}
                />

              </div>

              <div className="inputcontainer">
                
                <label >Preço: </label>
                <input type="number"
                value={inputPreco}
                onChange={(event)=>setInputPreco(event.target.value)}
                />

              </div>

              <div className="inputcontainer">
                
                <label >Imagem: </label>
                <input type="text" 
                value={inputImagem}
                onChange={(event)=>setInputImagem(event.target.value)}
                />

              </div>

              <button onClick={cadastro}>Cadastrar</button>

            </div>


        </div>
    );
}

export default Body;
