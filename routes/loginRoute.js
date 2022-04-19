const express = require('express'); 
const router = express.Router();
const loginController = require('../controllers/loginController'); 


router.get('/', isNotLoggedIn, loginController.showLogin);
router.post('/', isNotLoggedIn, loginController.findUser);
/* router.get('/index', isLoggedIn, routesController.getIndex) */

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
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