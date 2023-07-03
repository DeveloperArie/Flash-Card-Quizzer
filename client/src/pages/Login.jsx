import React from 'react'
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from '../api/loginUser'


export const handleErrors = async (response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return response
}

export default function Login({setCredentials}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    

    const navigate = useNavigate()

    async function login(e) {
        e.preventDefault()
        await loginUser({username, password})
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
            setCredentials({
                username,
                password,
                token: data.token
            })
            navigate('/')
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    
    return (
        <div>
            <h1>Login</h1>
            {<span className="err">{error}</span>}
            <form onSubmit={login}>
                <input  
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="username"/>
                <br/>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password"/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    ) 
}

