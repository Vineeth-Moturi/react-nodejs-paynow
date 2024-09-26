const express = require('express'); 
const router = express.Router();

// Multer storage setup - it uses memory storage
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage })

const { FileUploadHandler, FileRetriveHandler } = require('../controllers/fileHandlerController');

router.post('/upload', upload.single('image'), FileUploadHandler);
router.get('/fetch', FileRetriveHandler)
module.exports = router;