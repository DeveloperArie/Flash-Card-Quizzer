import { API_URL } from "./config"

export async function deleteCard(deckId, index, token) {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
      method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.json()
}
