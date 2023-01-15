
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });
const uri = process.env.MONGO_URI;
// A function that we can export and use it in our server.js
const connectDB = async () => {
    
    const conn = await mongoose.connect(uri, { 
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
};

module.exports = connectDB;