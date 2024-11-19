const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictureController');

router.get('/pictures', pictureController.getPictures);

module.exports = router;