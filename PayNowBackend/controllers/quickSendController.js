const User = require('../Models/User');

async function searchUser(req, res){
  const {queryString} = req.body;
  try{
    const users = await User.find({
      $or: [
        {username: {$regex: queryString, $options: 'i'}},
        {useremail: {$regex: queryString, $options: 'i'}},
      ]
    })
    .select('username userUid -_id')
    .populate({
        path: 'userInfo', 
        select : 'profile_image_url firstname lastname country phone -_id'
      });
    res.status(200).json({message: 'Fetched successfully', userDetails: users})
  }catch{
    res.status(400).json({message: 'Something went wrong'})
  }
  
}

module.exports = { searchUser };