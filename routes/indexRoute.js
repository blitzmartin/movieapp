const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/user', isLoggedIn, indexController.showUserIndex);
router.get('/', isNotLoggedIn, indexController.showHomepage);

router.delete('/logout', isLoggedIn,  indexController.logOut)



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