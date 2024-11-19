const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictureController');

router.get('/pictures', pictureController.getPictures);

router.get('/pictures/:id', pictureController.getPictureById);

module.exports = router;
