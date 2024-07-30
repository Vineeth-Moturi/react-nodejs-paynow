const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transaction_id: {
    type: String,
    required: true,
    unique: true
  },
  reciever_id: {
    type: String,
    required: true
  },
  sender_id: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  fee: {
    type: Number
  },
  transaction_date: {
    type: Date,
    required: true
  }
})
module.exports = mongoose.model('Transaction', transactionSchema)