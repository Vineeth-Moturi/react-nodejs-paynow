// const FileUploader = require('../Helpers/FileUploadHelper');
const { Readable } = require('stream');

async function FileUploadHandler(req, res){
  console.log("Reached FileUploadHandler")
  console.log('req.gfs',req.gfs)
  console.log('req.gridFSBucket',req.gridFSBucket)

  const { buffer, originalname } = req.file;
  
  if (!buffer || !originalname) {
    return res.status(400).json({ message: 'No file provided' });
  }
  const readableStream = Readable.from(buffer);
  const uploadStream = req.gridFSBucket.openUploadStream(originalname);

  readableStream.pipe(uploadStream)
    .on('error', (err) => {
      console.error('Error uploading to GridFS:', err);
      return res.status(500).json({ message: 'Error uploading file' });
    })
    .on('finish', () => {
      res.status(200).json({ message: 'Image uploaded successfully' });
    });
}






module.exports = { FileUploadHandler }