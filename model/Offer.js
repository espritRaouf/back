const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferSchema = new Schema({
  description: String,
  disponibilite: String,
  prix: String,
  type:String,
  image: String,
  
});

const Offer = mongoose.model('Offer', OfferSchema, 'offer');

module.exports = {
  Offer: Offer,  
};