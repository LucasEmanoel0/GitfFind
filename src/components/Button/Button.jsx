import './Button.css'

// eslint-disable-next-line react/prop-types
export default function Button({handleGetData}){
    return(
        <button onClick={handleGetData}>buscar</button>
    )
}