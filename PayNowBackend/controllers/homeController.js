

async function homeHandler(req, res){
  res.status(200).json({message: "reached authenticated home"})
}

module.exports = homeHandler;