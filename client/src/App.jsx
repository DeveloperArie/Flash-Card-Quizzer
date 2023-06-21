import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { deleteDeck } from './api/deleteDeck'
import { getDecks } from './api/getDecks'
import { createDeck } from './api/createDeck'

function App() {
  const [decks, setDecks] = useState([])
  const [title, setTitle] = useState('')

  async function handleCreateDeck(e){
    e.preventDefault()
    await createDeck(title)
    setTitle('')
  }

  async function handleDeleteDeck(deckId){
    await deleteDeck(deckId)
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks()
      setDecks(newDecks)
    }
    fetchDecks()
  
  }, [decks])

  return (
    <div className='App'>
      <div className='decks'>
        {
          decks.map((deck) => (
            <div className='deck' key={deck._id}>
              <span className='closeBtn' onClick={() => handleDeleteDeck(deck._id)}>X</span>
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='deck-title'>Deck Title</label>
        <input 
          value={title}
          id='deck-title'
          onChange={(e) => {
            setTitle(e.target.value) 
          }}/>
          <button>Create Deck</button>
      </form>
    </div>
  )
}

export default App
