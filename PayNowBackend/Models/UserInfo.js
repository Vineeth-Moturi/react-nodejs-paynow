const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: {
    type: String
  },
  country: {
    type: String
  },
});
module.exports = mongoose.model('UserInfo', UserInfoSchema);