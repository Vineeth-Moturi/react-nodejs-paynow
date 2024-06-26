const User = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require('../Config/AuthConfig');


async function signupHandler(req, res){
  const {username, useremail, password} = req.body;
  try{
    const user = await User.findOne({useremail});
    if(!user){
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username: username,
        useremail: useremail,
        password: hashedPassword
      });
  
      try {
        const success = await user.save()
        req.session.user = { useremail: user.useremail}
        res.status(201).json({status: 'User successfully created', success: success})
      }catch(err){
        res.status(401).json({status: "Un-authorised", err: err})
      }
    }else{
      res.status(200).json({status: 'User already existing'})
    }
  }catch(err){
    res.status(422).json({message: "Something went wrong"})
  }
}


async function loginHanlder(req, res){
  const {useremail, password} = req.body;
  try {
    const user = await User.findOne({useremail});
    if (user){
      const pass_match = await bcrypt.compare(password, user.password)
      if(pass_match){
        req.session.user = { useremail: user.useremail}
        res.status(200).json({status: "success", message: "Login successfull"})
      }else{
        res.status(401).json({status: "Un-authorised", message: "Login failed"})
      }
    }else{
      res.status(422).json({status: "success", message: "User Doesn't exist"})
    }
  }catch (err){
    res.status(422).json({status: "Login failed", message: "Something Went Wrong"})
  }
}

async function logoutHandler(req, res){
  req.session.destroy(err => {
    if(err){
      return res.status(500).json({message: "Unable to logout, something went wrong"})
    }
    res.status(200).json({message: "User logged out"})
  });
}


module.exports = { signupHandler, loginHanlder, logoutHandler};