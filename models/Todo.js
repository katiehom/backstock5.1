const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  storageLocation: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
  },
  idealQuantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
  expirationDate: {
    type: String,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema)
