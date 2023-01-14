
const express = require('express');
const { cloudinary } = require('../utils/cloudinary');

const {
    getFlash
} = require('../controllers/flashController');


const router = express.Router();

// GET all collages
router.get('/', getFlash)

module.exports = router;