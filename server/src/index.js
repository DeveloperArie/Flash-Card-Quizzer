import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 5000
import Deck from './models/deck.js'

app.use(express.json())

app.post('/decks', async (req, res) => {
    const newDeck = new Deck({
        title: req.body.title,
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

const db = await mongoose
.connect(
    'mongodb+srv://FCQ:5MnjXOFSqxPkUCTt@cluster0.iwew2kq.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log(`listenting to ${PORT}`)
    app.listen(PORT)
})


