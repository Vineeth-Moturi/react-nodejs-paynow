// const FileUploader = require('../Helpers/FileUploadHelper');
const { Readable } = require('stream');
const UserInfo = require("../Models/UserInfo");

async function FileUploadHandler(req, res){
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
      return res.status(500).json({ message: 'Error uploading file' });
    })
    .on('finish', async () => {
      if(useremail){
        const user_info = await UserInfo.findOne({useremail});
        if(user_info){
          user_info.profile_image = file_name;
          user_info.profile_image_url = 'file/fetch?file_name='+ file_name;
          if(await user_info.save()){
            const userDetails = user_info.toObject();
            delete userDetails._id
            res.status(200).json({ message: 'Image uploaded successfully' , userDetails: userDetails});
          }else{
            res.status(400).json({ message: 'Image upload Failed' });
          }
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
  if(file_name){
    try{
      const file = await req.gfs.files.findOne({filename: file_name});
      if(file){
        res.set('Content-Type', file?.filename?.split('.')[2] || 'application/octet-stream');
        res.set('Content-Disposition', 'inline');  // This prevents the file from being downloaded automatically
        
        const readStream = req.gridFSBucket.openDownloadStream(file._id);
        readStream.pipe(res);

        readStream.on('error', (err) => {
          res.status(404).json({message: "Something went wrong, on retriving file"})
        });
      }else{
        res.status(404).json({message: "File not Found"});
      }
    } catch (err){
      return res.status(500).json({ message: 'Error retrieving file', err});
    }
  }else{
    res.status(400).json({message: "File name not provided"});
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