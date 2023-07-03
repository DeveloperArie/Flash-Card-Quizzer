import Deck from '../models/deck.js'


export async function deleteDeckCon(req, res) {
    const deckId = req.params.deckId;
    const deck = await Deck.findByIdAndDelete(deckId)
    res.json(deck)
    
}
    