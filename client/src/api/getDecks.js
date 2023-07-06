import { API_URL } from "./config"

export async function getDecks(token) {
    const response = await fetch(`${API_URL}/decks`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}
