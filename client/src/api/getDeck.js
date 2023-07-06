import { API_URL } from "./config"

export async function getDeck(deckId, token) {
    const response = await fetch(`${API_URL}/decks/${deckId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}
