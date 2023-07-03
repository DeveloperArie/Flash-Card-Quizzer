import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 5000
import { config } from 'dotenv'
import { getDecksCon } from './controllers/getDecksCon.js'
import { createDeckCon } from './controllers/createDeckCon.js'
import { deleteDeckCon } from './controllers/deleteDeckCon.js'
import { createCardCon } from './controllers/createCardCon.js'
import { getDeckCon } from './controllers/getDeckCon.js'
import { deleteCardCon } from './controllers/deleteCardCon.js'
import { registerUserCon } from './controllers/registerUserCon.js'
import { loginUserCon } from './controllers/loginUserCon.js'

config()



app.use(cors('*'))
app.use(express.json())

app.get('/decks', getDecksCon)
app.post('/decks', createDeckCon)
app.delete('/decks/:deckId', deleteDeckCon)
app.get('/decks/:deckId', getDeckCon)
app.post('/decks/:deckId/cards', createCardCon)
app.delete('/decks/:deckId/cards/:index', deleteCardCon)
app.post('/register', registerUserCon)
app.post('/login', loginUserCon)

mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log(`listenting to ${PORT}`)
    app.listen(PORT)
})


