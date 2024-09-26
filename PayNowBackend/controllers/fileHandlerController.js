// const FileUploader = require('../Helpers/FileUploadHelper');
const { Readable } = require('stream');
const User = require("../Models/UserInfo")

async function FileUploadHandler(req, res){
  console.log("Reached FileUploadHandler")
  // req has gfs, gridFSBucket
  const date_now = new Date().toISOString();
  const { buffer, originalname } = req.file;
  const useremail = req.headers['user-email']
  
  if (!buffer || !originalname) {
    return res.status(400).json({ message: 'No file provided' });
  }
  const file_name = date_now + "_" + originalname;
  const readableStream = Readable.from(buffer);
  const uploadStream = req.gridFSBucket.openUploadStream(file_name);

  readableStream.pipe(uploadStream)
    .on('error', (err) => {
      console.error('Error uploading to GridFS:', err);
      return res.status(500).json({ message: 'Error uploading file' });
    })
    .on('finish', async () => {
      if(useremail){
        debugger
        const user = await User.findOne({useremail});
        if(user){
          user.profile_image = file_name;
          await user.save()
          res.status(200).json({ message: 'Image uploaded successfully' });
        }else{
          req.params.file_name = file_name
          FileDeletionHandler(req, res);
          res.status(400).json({ message: 'Image upload Failed' });
        }
      }
    });
}

async function FileRetriveHandler(req, res){
  const { file_name } = req.query
  console.log("Reached retriver")

  try{
    const file = await req.gfs.files.findOne({file_name}, (err, file) => {
      if (!file || file.length === 0){
        res.status(404).json({message: "File not found"})
      }
      if(err){
        res.status(400).json({message: "Something went wrong", err})
      }
      const readStream = req.gridFSBucket.openDownloadStream(file._id);
      readStream.on('error', (err) => {
        return res.status(500).json({ message: 'Error retrieving file', err});
      });
      readStream.pipe(res);
    })
  } catch (err){
    return res.status(500).json({ message: 'Error retrieving file', err});
  }
}

async function FileDeletionHandler(req, res){
  const file_name = req.params.file_name;

  req.gfs.files.findOne({file_name}, (err, file)=>{
    if(!file || file.length === 0){
      res.status(404).json({message: "File not found"})
    }

    req.gridFSBucket.delete(file._id, (err)=>{
      if(err){
        res.status(500).json({message: "Deletion Failed"})
      }
      res.status(200).json({message: "Deleted Successfully"})
    })
  })
}


module.exports = { FileUploadHandler, FileRetriveHandler, FileDeletionHandler }