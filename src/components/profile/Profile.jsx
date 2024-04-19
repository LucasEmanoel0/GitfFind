import Bios from "./Bios";
import ImgProfile from "./ImgProfile";
import Name from "./Name";
import NameSub from "./NameSub";
import './style.css'

// eslint-disable-next-line react/prop-types
export default function Profile({url, name, subtitle,bios}) {
    return(
        <div className="container">
            <div className="img-container">
                <ImgProfile url={url}></ImgProfile>
             </div>
            <section className="info">
                <div className="names">
                   <Name Name={name}></Name>
                   <NameSub NameSub={subtitle}></NameSub>
                </div>
                
                <div className="bio">
                   <Bios  Bios={bios}></Bios>
                </div> 
            </section>
           
        </div>
        

    )
}