
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: {
    type: String
  },
  words: {
    type: String
  },
  image: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)