const express = require('express');
const router = express.Router();
const {addOffer}=require('../controllers/addOffer')

router.post('/offers', addOffer);

module.exports = router;
