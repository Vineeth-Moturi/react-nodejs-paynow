const User = require('../Models/User');

async function searchUser(req, res){
  const {queryString} = req.body;
  try{
    const user = await User.find({
      $or: [
        {username: {$regex: queryString, $options: 'i'}},
        {useremail: {$regex: queryString, $options: 'i'}},
      ]
    });
    console.log('user',user)
    res.status(200).json({message: 'Reched searchUser Backend', data: user})
  }catch{
    res.status(400).json({message: 'Something went wrong'})
  }
  
}

module.exports = { searchUser };