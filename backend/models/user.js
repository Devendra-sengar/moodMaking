const mongoose = require( 'mongoose');
const validator =require ('validator');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "Please enter email id"], 
    validate: [validator.isEmail, "Please enter a valid email"],
  },

  
  lastlogin: {
    type: Date,
    default: Date.now(),
  },

  isvarified: {
    type: Boolean,
    default: false,
  },
  password :{
    type: String,
    required: [true, "Please enter password"],
  },
  fringerprint:{
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpired: Date,
  varificationToken: String,
  varificationTokenExpired:Date,  
}, {
  timestamps: true,
});

exports.User = mongoose.model('User', schema);




