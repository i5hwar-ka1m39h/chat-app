import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const[user, setUser] = useState('')
    const navigate = useNavigate()
    const submitName = () =>{
        localStorage.setItem("username", user)
        navigate("/chatroom")
    }
    return(
        <div>
            <input type="text" placeholder="username" onChange={e=>setUser(e.target.value)}/>
            <button onClick={submitName}>submit</button>
        </div>
    )
}