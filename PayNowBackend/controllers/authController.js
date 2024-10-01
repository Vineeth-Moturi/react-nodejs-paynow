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
      const userUid = await generateUID()
      const user = new User({
        username: username,
        useremail: useremail,
        password: hashedPassword,
        userUid: userUid
      });
  
      try {
        const success = await user.save()
        if(success){
          const userinfo = new UserInfo({
            userUid: userUid,
            useremail: useremail,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            country: country
          });
          await userinfo.save();
          user.userInfo = userinfo._id;
          await user.save();
          const userDetails = await User.findOne({useremail})
            .select('-_id -password')
            .populate({path: 'userInfo', select: '-_id'})
            .exec();
          if(userDetails){
            req.session.user = { useremail: user.useremail}
            res.status(201).json({message: 'User successfully created', userDetails: userDetails})
          }else{
            res.status(200).json({message: 'Unable to create User, Something went wrong'})
          }
        }else{
          res.status(200).json({message: 'Unable to create User, Something went wrong'})
        }
      }catch(err){
        res.status(401).json({message: "Un-authorised", err: err})
      }
    }else{
      res.status(200).json({message: 'User already existing'})
    }
  }catch(err){
    res.status(422).json({message: "Something went wrong", err: err})
  }
}


async function loginHanlder(req, res){
  const {useremail, password} = req.body;
  try {
    const user = await User.findOne({useremail}).populate( {path: 'userInfo', select: '-_id'} ).exec();
    if (user){
      const pass_match = await bcrypt.compare(password, user.password)
      if(pass_match){
        req.session.user = { useremail: user.useremail}
        const userDetails = user.toObject()
        delete userDetails._id;
        delete userDetails.password;
        res.status(200).json({status: "success", message: "Login successfull", userDetails: userDetails})
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
  const user = await User.findOne({userUid: uid});
  if(user){
    generateUID();
  }else{
    return uid;
  }
}

module.exports = { signupHandler, loginHanlder, logoutHandler};