const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/uploads')
    },
    filename: function (req, file, cb) {
     
        cb(null, file.originalname);
       
    },
});

const uploader = multer({storage});

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    console.log(req.savedFile);
    res.status(200).json({message: 'file uploaded successfully', savedFile : req.savedFile });
})

module.exports = router;