import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { handleErrors } from "./Login"
import { registerUser } from "../api/registerUser"
import { CredentialsContext } from "../App"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const credentials = useContext(CredentialsContext)
    useEffect(() => {
        if (credentials.token) {
            navigate("/login")
        }
    }, [credentials])

    const [error, setError] = useState('')
    

    async function register(e) {
        e.preventDefault()
        if (!username || !password) {
            setError("Please enter a username and password.")
            return
        }
        try {
            const data = await registerUser({username, password})
            console.log({data})
            localStorage.setItem("token", data.token);
            credentials.setUsername(data.user.username)
            credentials.setToken(data.token)
        } catch (error) {
            setError("User already exists or some other error")
            console.error(error)
        }
    }

    
    return (
        <div className='registerPage'>
            <h1>Sign Up</h1>
            {error && <span className="err">{error}</span>}
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