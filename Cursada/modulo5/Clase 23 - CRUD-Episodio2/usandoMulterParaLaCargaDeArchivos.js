const express = require('express');
const router = express.Router();
const multer = require('multer');
var upload = multer({ storage: storage })

router.post('/register', upload.any(), usersController.save);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})