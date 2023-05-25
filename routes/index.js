const Router = require('express');
const userRouter = require('./userRouter');
const furnitureRouter = require('./furnitureRouter');
const reviewRouter = require('./reviewRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/furniture', furnitureRouter);
router.use('/review', reviewRouter);

module.exports = router;
