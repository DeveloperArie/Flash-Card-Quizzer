import mongoose from 'mongoose'
import CardSchema from './card.js';

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  title: String,
  cards: [CardSchema]
})

const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel