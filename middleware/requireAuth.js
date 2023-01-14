const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
// require('dotenv').config();
const requireAuth = async (req, res, next) => {
  
  // verify user is authenticated
  const { authorization } = req.headers
  
  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }
    
  // 'bearer headerString.payloadString.verifyString'
  // split by empty character, take from indice 
  const token = authorization.split(" ")[1]

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findOne({ _id }).select('_id')

    console.log('requireAuth is firing off, next() is next..')
    // If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. SO DON'T FORGET. 'next' is not a keyword but by convention named as such. 
    next()

  } catch (error) {
    console.log(`This is an auth error: ${error}`)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth