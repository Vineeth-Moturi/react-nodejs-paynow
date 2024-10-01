const mongoose = require('mongoose');
const { ObjectId } = require("mongodb");

const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userUid: {
    type: String,
    required: true
  },
  userInfo: {
    type: ObjectId,
    ref: 'UserInfo'
  }
})

module.exports = mongoose.model('User', userShema);