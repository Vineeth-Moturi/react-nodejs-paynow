const express = require('express'); 
const router = express.Router();

const homeHandler  = require('../controllers/homeController');

router.post('/home', homeHandler);

module.exports = router;