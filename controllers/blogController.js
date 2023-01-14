
// const express = require("express");
// const router = express.Router();
// const Blog = require('../models/blogModel')
// const mongoose = require('mongoose')

// bring in Cloudinary
const { cloudinary } = require('../utils/cloudinary');


// get all blogs
// const getBlogs = (req, res, next) => {
//   Blog.find()
//     .select('title words _id image')
//     .sort({createdAt: -1})
//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         blogs: docs.map(doc => {
//           return {
//             title: doc.title,
//             words: doc.words,
//             image: doc.image,
//             _id: doc._id,
//             request: {
//               type: 'GET',
//               url: 'http://localhost:3000/blogs/' + doc._id
//             }
//           };
//         })
//       };
//       res.status(200).json(response);
//       })
//       .catch(err => {
//             console.log(err);
//             res.status(500).json({
//               error: err
//             });
//           });  
      // Closing Bracket Here:
// };

// get a single blog
// const getBlog = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'Mongoose ObID No such blog'})
//   }

//   const blog = await Blog.findById(id)

//   if (!blog) {
//     return res.status(404).json({error: 'Collection findById No such blog'})
//   }

//   res.status(200).json({
//     msg: 'get single workout',
//     data: blog
//   })
// }


// create a new blog
// const createBlog = async (req, res) => {

//   const {title, words, image} = req.body

//   let emptyFields = []

//   if (!title) {
//     emptyFields.push('title')
//   }
//   if (!words) {
//     emptyFields.push('words')
//   }
//   if (!image) {
//     emptyFields.push('image')
//   }
//   if (emptyFields.length > 0) {
//     return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
//   }

//   // add to the database
//   try {
//     const blog = await Blog.create({ title, words, image })
//     res.status(200).json({
//       success: true,
//       data: blog
//     })
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// };
const getImages = async (req, res) => {
  // placed logic inside try catch blocks
  // otherwise received UnhandledPromiseRejection error
  // Ooops!
  
  // sort_by('public_id')
  try {
    const { resources } = await cloudinary.search
        .expression('folder:tc_test')
        .sort_by('created_at', 'desc')
        .max_results(30)
        .execute()
        
    // console.log()
    const publicIds = resources.map((file) => file.public_id);
    console.log(publicIds)
    res.send(publicIds);
    
  } catch (err) {
    console.log(`This is a GET error: ${err}` + err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
  
}

const uploadImage = async (req, res) => {
  // none of this is being run when POST hits...
  console.log('This is the uploadImage controller')
  try {
    
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      folder: 'tc_test'
      });
      res.json({ msg: 'yaya' });

  } catch (err) {
      console.error(`This is a POST error: ${err}`);
      res.status(500).json({ msg: 'Something went wrong' });
  }
};





// delete a blog
// const deleteBlog = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'Mongoose ObID No such blog'})
//   }

//   const blog = await Blog.findOneAndDelete({_id: id})

//   if(!blog) {
//     return res.status(400).json({error: 'Collection findById No such blog'})
//   }

//   res.status(202).json({
//     success: true,
//     data: blog
//   })
// }

// update a blog
// const updateBlog = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const blog = await Blog.findOneAndUpdate(
//     {
//     _id: id
//     }, 
//     {
//     ...req.body
//     },  
//     {
//     new: true,
//     // read about runValidators
//     runValidators: true
//     });

//   if (!blog) {
//     return res.status(400).json({error: 'No such blog'})
//   }

//   res.status(201).json({
//     success: true,
//     data: blog
//   })
// }

module.exports = {
  // getBlogs,
  // getBlog,
  getImages,
  uploadImage
  // createBlog,
  // deleteBlog,
  // updateBlog
}