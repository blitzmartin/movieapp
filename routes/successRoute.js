const express = require('express');
const router = express.Router();
const indexController = require('../controllers/successController')

router.get('/', indexController.showSuccess);

module.exports = router;