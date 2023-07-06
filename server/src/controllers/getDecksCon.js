
import jwt from 'jsonwebtoken'
import Deck from '../models/deck.js'

export async function getDecksCon(req, res) {
    const decks = await Deck.find({username: req.username})
    res.json(decks)
}
