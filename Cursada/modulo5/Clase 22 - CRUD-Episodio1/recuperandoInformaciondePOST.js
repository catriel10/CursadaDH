const express = require('express');
const router = express.Router();

router.post ('/ver-body', (req,res) => {res.send(req.body)});