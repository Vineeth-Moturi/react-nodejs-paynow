// const mongoose = require('mongoose');
// const Grid = require('gridfs-stream');
// const GridFsStorage = require('multer-gridfs-storage');
// const multer = require('multer');
// const dotenv = require('dotenv')
// const authConfig = require('../Config/AuthConfig');

// dotenv.config({
//   path: process.env.NODE_ENV == 'production' ? './production.env' : './development.env'
// })


// // Creating a connection to MongoDB
// const conn = mongoose.createConnection(authConfig.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


// // Initialize GridFS
// let gfs;
// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('fileuploads');
// });

// // Create a storage engine for multer to use GridFS
// const storage = new GridFsStorage({
//   url: authConfig.MONGODB_URL,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     return {
//       bucketName: 'fileuploads', // The collection name in GridFS
//       filename: `${Date.now()}-${file.originalname}`
//     };
//   }
// });

// const FileUploader = multer({ storage });
// module.exports = FileUploader;