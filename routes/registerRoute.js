const express = require('express'); 
const router = express.Router();
const registerController = require('../controllers/registerController'); 

router.get('/', registerController.showRegister);
router.post('/', registerController.createUser);

module.exports = router;