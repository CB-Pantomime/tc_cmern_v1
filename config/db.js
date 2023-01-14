
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });

// A function that we can export and use it in our server.js
const connectDB = async () => {
    
    const conn = await mongoose.connect(process.env.MONGO_URI, { 
        //  useNewUrlParser: true,
        //  useUnifiedTopology: true,
        //  useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
};

module.exports = connectDB;