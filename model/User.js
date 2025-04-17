const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number, // ou String si tu veux garder le zéro au début
    required: true,
  },
isAdmin :{
  type:Boolean,
  default:false,
}

}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
