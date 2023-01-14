
const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Bringing in routes
const blogRoutes = require('./routes/blogs');
const userRoutes = require('./routes/user');
const collageRoutes = require('./routes/collage');
const flashRoutes = require('./routes/flash');

// express app
const app = express();

// Connect DB
connectDB();

// middlewares:

app.use(cors());

// for serving static files from public folder (for static pages)
// **Not currently using static files, getting all imgs from 
// cloudinary calls:
// app.use(express.static('public'));

// image upload middlewares
// Important here below for 413 http error code fixing:
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ 
  limit: '500mb', 
  extended: true,
  parameterLimit: 100000
}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

// **On hold due to cloudinary calls:
// app.use('/uploads', express.static('uploads'));

// Register routes with our instance of express
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/collage', collageRoutes);
app.use('/api/v1/flash', flashRoutes);
app.use('/api/v1/user', userRoutes);

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));