const User = require('../Models/User');

async function searchUser(req, res){
  const {queryString} = req.body;
  try{
    const users = await User.find({
      $or: [
        {username: {$regex: queryString, $options: 'i'}},
        {useremail: {$regex: queryString, $options: 'i'}},
      ]
    });
    console.log('user',users)
    res.status(200).json({message: 'Reched searchUser Backend', userDetails: users})
  }catch{
    res.status(400).json({message: 'Something went wrong'})
  }
  
}

module.exports = { searchUser };