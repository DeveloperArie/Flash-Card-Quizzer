import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { deleteDeck } from '../api/deleteDeck'
import { getDecks } from '../api/getDecks'
import { createDeck } from '../api/createDeck'
import {CredentialsContext} from '../App'
import {useNavigate} from 'react-router-dom'



function Decks() {
  const navigate = useNavigate()
  const credentials = useContext(CredentialsContext)
  const [decks, setDecks] = useState([])
  const [title, setTitle] = useState('')

    useEffect(() => {
        // TODO
        if (credentials.token) {
            ;
        } else {
            navigate("/login")
        }
    }, [credentials])


  async function handleCreateDeck(e){
    e.preventDefault()
    const deck = await createDeck(title, credentials.token)
    setDecks([...decks, deck])
    setTitle('')
 
  }

  async function handleDeleteDeck(deckId){
    await deleteDeck(deckId, credentials.token)
    setDecks(decks.filter((deck) => deck._id !== deckId))
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks(credentials.token)
      setDecks(newDecks)
    }
    fetchDecks()
  
  }, [credentials.token])

  return (
    <div className='App'>
      <div className='pageContainer'>
        <div className='decks'>
          {
            decks.map((deck) => (
              <div className='deck' key={deck._id} onClick={() => navigate(`/decks/${deck._id}`)}>
                <span className='closeBtn' onClick={(e) => {e.stopPropagation(); handleDeleteDeck(deck._id)}}>X</span>
                <span >{deck.title}</span>
              </div>
            ))
          }
          <div className='deck'>
            <div className='deckContainer'>
              <label htmlFor='deck-title'>Deck Title</label>
              <input 
                value={title}
                id='deck-title'
                onChange={(e) => {
                  setTitle(e.target.value) 
                }}/>
              <span className='newDeckBtn' onClick={handleCreateDeck}>+</span>
            </div>
          </div>
        </div>  
      </div>  
    </div>
  )
}

export default Decks
