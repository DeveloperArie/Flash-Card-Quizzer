import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { createCard } from '../api/createCard'
import { useParams } from 'react-router-dom'
import { getDeck } from '../api/getDeck'
import { deleteCard } from '../api/deleteCard'
import {CredentialsContext} from '../App'

export default function Deck(){
    const [deck, setDeck] = useState()
    const [cards, setCards] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const { deckId } = useParams()

    const credentials = useContext(CredentialsContext)
    const token = credentials.token
    async function handleCreateCard(e){
        e.preventDefault()
        const { cards: serverCards } = await createCard(deckId, question, answer, token)
        setCards(serverCards)
        setQuestion('')
        setAnswer('')
        
    }

    async function handleDeleteCard(index){
        if(!deckId) return
        const newDeck = await deleteCard(deckId, index, token)
        setCards(newDeck.cards)
    }
    function handleFlipCard(index) {
        const updatedCards = [...cards]
        updatedCards[index].flip = !updatedCards[index].flip
        setCards(updatedCards)
    }

    useEffect(() => {
        
        async function fetchDeck() {
            if(!deckId) return
            const newDeck = await getDeck(deckId, token)
            console.log({newDeck})
            setDeck(newDeck)
            setCards(newDeck.cards.map(card => ({ ...card, flip: false })))
        }
        fetchDeck()
    
    }, [deckId])

    return (
        <div className='App'>
            <div className='pageTwoContainer'>
                <h1>{'Cards for:' + ' ' + deck?.title }</h1>
                <div className='cards'>
                    {
                    cards.map((card, index) => (
                        <div className={`card ${card.flip ? 'flip' : ''}`} key={index} onClick={() => handleFlipCard(index)} >
                            <div className='front cardContent'>
                                <h2>Question:</h2>
                                {card.question}
                            </div>
                            <div className='back cardContent'>
                                <h2>Answer:</h2>
                                {card.answer}
                            </div>
                            <span className='closeBtn' onClick={() => handleDeleteCard(index)}>X</span>
                        </div>
                        ))
                    }
                    <div className='card'>
                        <div className='cardContainer'>
                            <label htmlFor='card-question'>Question</label>
                            <input 
                                value={question}
                                id='card-text'
                                onChange={(e) => {
                                setQuestion(e.target.value) 
                                }}/>
                            <label htmlFor='card-answer'>Answer</label>
                            <input 
                                value={answer}
                                id='card-text'
                                onChange={(e) => {
                                setAnswer(e.target.value) 
                                }}/>
                            <span className='newDeckBtn' onClick={handleCreateCard}>+</span>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    )
}
