const User = require('../Models/User')
const bcrypt = require('bcrypt');


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
        res.status(200).json({status: "success", message: "Login successfull"})
      }else{
        res.status(401).json({status: "Un-authorised", message: "Login failed"})
      }
    }
  }catch (err){
    res.status(401).json({status: "Un-authorised", message: "Login failed"})
  }
  
  
}


module.exports = { signupHandler, loginHanlder};