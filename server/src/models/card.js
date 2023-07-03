import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  question: String,
  answer: String
});

export default CardSchema;