const express = require('express'); 
const router = express.Router();

//Above lines can be written as (may be converted to an ES module like below)
// import { Router } from 'express'; 
// const router = Router();


const { signupHandler, loginHanlder, logoutHandler} = require('../controllers/authController')


router.post('/signup', signupHandler);
router.post('/login', loginHanlder);
router.get('/logout', logoutHandler);

module.exports = router;