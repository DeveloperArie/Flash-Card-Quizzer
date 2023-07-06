import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { handleErrors } from "./Login"
import { registerUser } from "../api/registerUser"
import {CredentialsContext} from "../App"

export default function Register({setCredentials}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const credentials = useContext(CredentialsContext)
    useEffect(() => {
        if (credentials.token) {
            navigate("/")
        }
    }, [credentials])

    const [error, setError] = useState('')
    

    async function register(e) {
        e.preventDefault()
        const data = await registerUser({username, password})
        console.log({data})
        localStorage.setItem("token", data.token);
        navigate('/')
    }

    
    return (
        <div className='registerPage'>
            <h1>Sign Up</h1>
            {<span className="err">{error}</span>}
            <form onSubmit={register}>
                <input  
                    className='loginInputs'
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="username"/>
                <br/>
                <input 
                    className='loginInputs'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password"/>
                <br/>
                <button className="registerBtn headerBtns" type="submit">Register</button>
            </form>
        </div>
    ) 
}
