const express = require('express'); 
const router = express.Router();
const loginController = require('../controllers/loginController'); 

// /login
router.get('/', isNotLoggedIn, loginController.showLogin);
router.post('/', isNotLoggedIn, loginController.findUser);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {  
      return next()
    }
    res.redirect('/')
  }
  
  function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/index')
    }
    next()
  }

module.exports = router;