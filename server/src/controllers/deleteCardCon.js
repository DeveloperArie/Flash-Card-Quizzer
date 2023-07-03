import Deck from '../models/deck.js'

export async function deleteCardCon(req, res) { 
    const deckId = req.params.deckId
    const index = req.params.index
    const deck = await Deck.findById(deckId)
    if (!deck) return res.status(400).send('nonexistent deck')
    deck.cards.splice(parseInt(index, 10), 1)
    await deck.save()
    res.json(deck)

}
    
    