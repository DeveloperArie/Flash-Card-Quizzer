import Deck from '../models/deck.js'

export async function getDeckCon(req, res) {
    const { deckId } = req.params
    const deck = await Deck.findById(deckId)
    res.json(deck)
}