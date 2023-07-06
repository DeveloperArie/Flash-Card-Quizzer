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

import jwt from 'jsonwebtoken'

config()

const nonSecureRoutes = ["/login", "/register"]
const checkAuth = (req,res,next) => {
    console.log(req.path)
    if (nonSecureRoutes.includes(req.path)) {
        return next()
    }

    try {
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token)
    if(!token)
    {
        res.status(200).json({success:false, message: "Error! Token was not provided."});
    }

    //Decoding the token
    const decodedToken = jwt.verify(token,"super-secret-password" );
    req.username = decodedToken.username
    return next()
    } catch(e) {
        console.error(e)
        res.status(200).json({success:false, message: "Error! Token was not provided."});

    }
}

app.use(cors('*'))
app.use(express.json())
app.use(checkAuth)

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


