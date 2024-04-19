import NameRep from "./NameRep";
import Description from "./Description";
import './style.css'

// eslint-disable-next-line react/prop-types
export default function Card({name,description}){
    return(
        <div className="Card">
               <div className="repositorio">
                <NameRep name={name}></NameRep>
                <Description description={description}></Description>
               </div>
        </div>
        
    )
}