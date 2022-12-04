
const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.home);
router.get('/myloanlists', viewsController.getMyLoan);
router.get('/allloanlists', viewsController.getLoan);
router.get('/createNewLoan', viewsController.CreateNewLoan);
router.get('/loanList', viewsController.getMyLoan);
router.get('/logout', viewsController.logout);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);

module.exports = router;