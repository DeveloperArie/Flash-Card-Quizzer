import React, {useEffect} from 'react'
import { useState, useContext } from "react"
import { useNavigate,  } from "react-router-dom"
import { loginUser } from '../api/loginUser'
import {CredentialsContext} from '../App'


export const handleErrors = async (response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return response
}

export default function Login() {
    const navigate = useNavigate()

    const credentials = useContext(CredentialsContext)
    useEffect(() => {
        if (credentials.token) {
            navigate("/")
        }

    }, [credentials])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    


    async function login(e) {
        e.preventDefault()
        const data = await loginUser({username, password})
        console.log({data})
        localStorage.setItem("token", data.token)
        navigate('/')
    }

    
    return (
        <div className='loginPage'>
            <h1 >Log in</h1>
            {<span className="err">{error}</span>}
            <div className='loginContainer'>
                <form onSubmit={login}>
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
                    <button className='loginBtn headerBtns' type="submit">Log in</button>
                </form>
            </div>
            
        </div>
    ) 
}

