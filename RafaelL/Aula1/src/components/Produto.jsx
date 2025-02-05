import './Produto.css';
import { CiWarning } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";

function Produto({nome,preco,img}) {
  return (
    <div className='container-produto'>

        <h2>{nome}</h2>
        <img className='chinelo-azul' src={img}/>
        <p> ₿ &nbsp;{preco} BTC</p>
        <button className='botao-compra' onClick={()=> confirm("funciona não kk")}> Comprar </button>

        {preco < 2 &&
        
            <div className='warning'>
                <strong><CiWarning/></strong>
                <p>PROMOÇÃO</p>
            </div>
        }

{preco > 10 &&
        
        <div className='estoque'>
            <strong><FaFireFlameCurved /></strong>
            <p>ÚLTIMO</p>
        </div>
    }
    </div>
  )
}

export default Produto
