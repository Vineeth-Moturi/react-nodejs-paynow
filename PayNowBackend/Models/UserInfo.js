const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

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
  useremail: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  country: {
    type: String
  },
  profile_image_id: {
    type: String
  },
  profile_image: {
    type: String,
    default: ''
  },
  profile_image_url: {
    type: String,
    default: ''
  }
});
module.exports = mongoose.model('UserInfo', UserInfoSchema);