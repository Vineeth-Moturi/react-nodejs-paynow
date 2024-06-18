const User = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require('../Config/AuthConfig');


async function signupHandler(req, res){
  const {username, useremail, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    useremail: useremail,
    password: hashedPassword
  });

  try {
    const success = await user.save()
    const token  = jwt.sign({userId: user.id}, authConfig.JWT_SECRET, {expiresIn: authConfig.JWT_SECRET_EXPIRATION});
    req.session.user = { useremail: user.useremail}
    res.status(201).json({status: 'User successfully created', success: success})
  }catch(err){
    res.status(401).json({status: "Un-authorised", err: err})
  }
}


async function loginHanlder(req, res){
  const {useremail, password} = req.body;
  try {
    const user = await User.find({useremail: useremail});
    if (user){
      const pass_match = await bcrypt.compare(password, user.password)
      if(pass_match){
        req.session.user = { useremail: user.useremail}
        res.status(200).json({status: "success", message: "Login successfull"})
      }else{
        res.status(401).json({status: "Un-authorised", message: "Login failed"})
      }
    }
  }catch (err){
    res.status(401).json({status: "Un-authorised", message: "Login failed"})
  }
}

async function logoutHandler(req, res){
  req.session.destroy(err => {
    if(err){
      return res.status(500).json({message: "Unable to logout, something went wrong"})
    }
    res.status(200).json({message: "user logged out"})
  });
}


module.exports = { signupHandler, loginHanlder, logoutHandler};