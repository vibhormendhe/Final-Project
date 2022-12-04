
const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();


router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/logout', authController.logout);

router
  .route('/')
  .post(userController.createUser)
  .get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser);

module.exports = router;
