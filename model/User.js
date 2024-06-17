const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  role:String,
  num:Number,
  password: String,
  
});

const User = mongoose.model('User', UserSchema, 'usre');

module.exports = {
  User: User,  
};