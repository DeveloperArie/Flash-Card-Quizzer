import { API_URL } from "./config"

export async function userMe(token){
    const response = await fetch(`${API_URL}/me`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json" ,
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}
