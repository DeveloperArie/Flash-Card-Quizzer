import Deck from '../models/deck.js'

export async function createCardCon(req, res) { 
    const deckId = req.params.deckId
    const deck = await Deck.findById(deckId)
    if (!deck) return res.status(400).send('nonexistent deck')
    const { question, answer } = req.body
    deck.cards.push({question, answer})
    await deck.save()
    res.json(deck)

}
    