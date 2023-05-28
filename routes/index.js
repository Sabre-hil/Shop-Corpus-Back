const Router = require('express');
const userRouter = require('./userRouter');
const furnitureRouter = require('./furnitureRouter');
const reviewRouter = require('./reviewRouter');
const imagesRouter = require('./imagesRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/furnitures', furnitureRouter);
router.use('/review', reviewRouter);
router.use('/images', imagesRouter);

module.exports = router;
