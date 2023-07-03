import { API_URL } from "./config"

export async function createCard(deckId, question, answer) {
   const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
     method: 'POST',
     body: JSON.stringify({
       question,
       answer
     }),
     headers: {
       "Content-Type":"application/json" 
     }
   })
   return response.json()
}