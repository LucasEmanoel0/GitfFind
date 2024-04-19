import background from '../../../public/background.png'
import './Imagem.css'



export default function Imagem(){
    return(
        <div className='imagem'>
             <img src={background} alt="" className='fundoImagem'/> 
        </div>
    )
}