import Deck from '../models/deck.js'
import jwt from 'jsonwebtoken'

export async function createDeckCon(req, res) { 

    const newDeck = new Deck({
        title: req.body.title,
        username: req.username // line of interest
    })

    const createdDeck = await newDeck.save()
    res.json(createdDeck)

}
    
