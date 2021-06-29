const express = require('express');
const router = express.Router();

let producto = {
    nombre: null,
    precio: null
};

router.post ('/crear/producto', (req,res) => {res.send(req.body)});