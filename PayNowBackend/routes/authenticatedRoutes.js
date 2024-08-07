const express = require('express'); 
const router = express.Router();

const homeHandler  = require('../controllers/homeController');
const { FileUploadHandler } = require('../controllers/fileUploadController');
const { searchUser } = require('../controllers/quickSendController');

router.post('/home', homeHandler);
router.post('/fileupload', FileUploadHandler);
router.post('/searchUser', searchUser);

module.exports = router;