
import Deck from '../models/deck.js'

export async function getDecksCon(req, res) {
    const decks = await Deck.find()
    res.json(decks)
}