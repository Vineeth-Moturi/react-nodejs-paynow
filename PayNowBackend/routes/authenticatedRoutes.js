const express = require('express'); 
const router = express.Router();

const homeHandler  = require('../controllers/homeController');
const { searchUser } = require('../controllers/quickSendController');

router.post('/home', homeHandler);
router.post('/searchUser', searchUser);

module.exports = router;