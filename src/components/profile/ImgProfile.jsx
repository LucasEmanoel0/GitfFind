import './style.css'

// eslint-disable-next-line react/prop-types
export default function ImgProfile({url}){
    return(
        <img src={url} alt="" className='imgProfile' />
    )
}