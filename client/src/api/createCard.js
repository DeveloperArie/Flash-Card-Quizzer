import { API_URL } from "./config"

export async function createCard(deckId, question, answer, token) {
   const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
     method: 'POST',
     body: JSON.stringify({
       question,
       answer
     }),
     headers: {
       "Content-Type":"application/json" ,
         "Authorization": `Bearer ${token}`

     }
   })
   return response.json()
}
