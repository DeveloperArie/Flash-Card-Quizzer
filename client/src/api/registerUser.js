import { API_URL } from "./config"

export async function registerUser({username, password}){
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type":"application/json" 
        }
    })
    
    return response.json()
    
}
