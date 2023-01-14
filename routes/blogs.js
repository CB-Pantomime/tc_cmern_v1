
const express = require('express');
const { cloudinary } = require('../utils/cloudinary');
const {
  // getBlogs, 
  getImages,
  uploadImage
  // createBlog, 
  // deleteBlog, 
  // updateBlog
} = require('../controllers/blogController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// GET all blogs
router.get('/', getImages)


// ***** Auth Routes Below *****
router.use(requireAuth)

// POST a new blog
router.post('/', uploadImage);
       
// UPDATE a blog
// router.patch('/:id', updateBlog)

// DELETE a blog
// router.delete('/:id', deleteBlog)

module.exports = router