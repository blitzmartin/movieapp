const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', isNotLoggedIn, indexController.showHomepage);
router.get('/user', isLoggedIn, indexController.showUserIndex);

router.get('/watchlist', isLoggedIn, indexController.showWatchlist);
router.post('/watchlist', isLoggedIn, indexController.addToWatchlist);

router.get('/movies/:id', isNotLoggedIn, indexController.showOneMovie);
router.get('/categories/:category', isNotLoggedIn, indexController.showCategory);

router.delete('/logout', isLoggedIn,  indexController.logOut)





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next()
    }
    res.redirect('/')
  }
  
  function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

module.exports = router;