
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup method
// at our Schema, use the statics PROPERTY, our signup (taco) method
// takes in two args email, password
// 
userSchema.statics.signup = async function(email, password) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  // look up isEmail() under the hood vs the one you made in birr_api
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password must contain minimum one each of the following: uppercase letter, lowercase letter, number, symbol. Password must be minimum 8 characters in length.')
  }

  // using THIS keyword to refer to our model since we are working
  // within our base userModel module (not an exported module)
  // check see if email exists w/ an instance of a user in collection
  const exists = await this.findOne({ email })
  // if exists throw error
  if (exists) {
    throw Error('Email already in use')
  }
  // ten rounds of salt
  // assists in generating different hashes for identical password
  // to buffer against password matching
  const salt = await bcrypt.genSalt(10)
  // that salt is passed in as second arg when hashing password
  const hash = await bcrypt.hash(password, salt)
  // creating user with provided email and salted/hashed password
  const user = await this.create({ email, password: hash })

  return user
}


// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Invalid credentials')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Invalid credentials')
  }

  return user
}


module.exports = mongoose.model('User', userSchema)