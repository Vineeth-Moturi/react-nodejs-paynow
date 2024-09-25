const User = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require('../Config/AuthConfig');
const UserInfo = require('../Models/UserInfo');


async function signupHandler(req, res){
  const {username, useremail, password, firstname, lastname, phone, country} = req.body;
  try{
    const user = await User.findOne({useremail});
    if(!user){
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await generateUID()
      const user = new User({
        username: username,
        useremail: useremail,
        password: hashedPassword,
        userId: userId
      });
  
      try {
        const success = await user.save()
        if(success){
          const userinfo = new UserInfo({
            userId: user.id,
            useremail: useremail,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            country: country
          });
          const success2 = await userinfo.save()
          req.session.user = { useremail: user.useremail}
          res.status(201).json({status: 'User successfully created', userDetails: {
            username: user.username, email: user.useremail
          }})
        }else{
          res.status(200).json({status: 'Unable to create User, Something went wrong'})
        }
      }catch(err){
        res.status(401).json({status: "Un-authorised", err: err})
      }
    }else{
      res.status(200).json({status: 'User already existing'})
    }
  }catch(err){
    res.status(422).json({message: "Something went wrong", err: err})
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
        res.status(200).json({status: "success", message: "Login successfull", userDetails: {
          username: user.username, email: user.useremail
        }})
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


async function generateUID(length=10){
  const ref = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const refLength = ref.length;
  let uid =''

  for(let i=0;i<length;i++){
    uid += ref.charAt(Math.floor(Math.random() * refLength))
  }
  const user = await User.findOne({userId: uid});
  if(user){
    generateUID();
  }else{
    return uid;
  }
}

module.exports = { signupHandler, loginHanlder, logoutHandler};