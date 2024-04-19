
import './Input.css'

// eslint-disable-next-line react/prop-types
export default function Input({User,setUser}){
    return(
        <input type="text"
          placeholder="@username"
          value={User}
          onChange={(ev)=>(setUser(ev.target.value))}/>
    )
}