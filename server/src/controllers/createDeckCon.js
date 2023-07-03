import Deck from '../models/deck.js'

export async function createDeckCon(req, res) { 
    const newDeck = new Deck({
        title: req.body.title,
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)

}
    