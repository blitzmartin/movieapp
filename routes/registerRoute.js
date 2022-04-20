const express = require('express'); 
const router = express.Router();
const registerController = require('../controllers/registerController'); 


// /register
router.get('/', isNotLoggedIn, registerController.showRegister);
router.post('/', isNotLoggedIn, registerController.createUser);

function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/index')
    }
    next()
  }

module.exports = router;