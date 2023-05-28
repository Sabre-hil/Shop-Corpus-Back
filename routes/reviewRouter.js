const Router = require('express');
const ReviewController = require('../controllers/reviewController');

const router = new Router();

router.post('/', ReviewController.create);
router.put('/', ReviewController.update);
router.get('/', ReviewController.getAllReview);
router.get('/:id', ReviewController.getOneReview);
router.delete('/', ReviewController.deleteReview);

module.exports = router;
