const Router = require('express');
const ImagesController = require('../controllers/imagesController');

const router = new Router();

router.post('/:id', ImagesController.createImage);

module.exports = router;
