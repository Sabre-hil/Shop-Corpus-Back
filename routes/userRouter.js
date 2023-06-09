const Router = require('express');
const UserController = require('../controllers/userController');

const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.check);

module.exports = router;
