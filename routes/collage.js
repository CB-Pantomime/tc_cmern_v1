
const express = require('express');
const { cloudinary } = require('../utils/cloudinary');

const {
    getCollages
} = require('../controllers/collageController');


const router = express.Router();

// GET all collages
router.get('/', getCollages)

module.exports = router;