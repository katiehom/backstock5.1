const mongoose = require('mongoose')

const RestockSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  store: {
    type: String,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  userId: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Restock', RestockSchema)
