import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { handleErrors } from "./Login"
import { registerUser } from "../api/registerUser"

export default function Register({setCredentials}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    

    const navigate = useNavigate()

    async function register(e) {
        e.preventDefault()
        await registerUser({username, password})
        .then(handleErrors)
        .then(() => {
            setCredentials({
                username,
                password,
            })
            navigate('/')
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    
    return (
        <div>
            <h1>Sign Up</h1>
            {<span className="err">{error}</span>}
            <form onSubmit={register}>
                <input  
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="username"/>
                <br/>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password"/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    ) 
}