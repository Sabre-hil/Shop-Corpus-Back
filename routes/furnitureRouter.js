const Router = require('express');
const FurnitureController = require('../controllers/furnitureController');

const router = new Router();

router.get('/', FurnitureController.getAll);
router.get('/:id', FurnitureController.getOne);

module.exports = router;
