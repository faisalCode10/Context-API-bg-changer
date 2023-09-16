import React, {useState, useContext} from 'react'
import UserContext from '../Context/userContext'
const Login = () => {
    const [userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
            setUser({userName, Password})
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='UserName' value={userName}  onChange={(e)=>setUserName(e.target.value)}/> <br /> <br />
        <input type="password" placeholder='Password' value={Password} onChange={((e)=>setPassword(e.target.value))} /> <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login