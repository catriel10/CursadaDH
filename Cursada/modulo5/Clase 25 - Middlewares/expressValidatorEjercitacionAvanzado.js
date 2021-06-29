const express = require('express');
const router = express.Router();
const { validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);
    //Chequear los errores acá, redirigir si hay errores
    if ( !errores.isEmpty()){
 res.render('login', {errores: errores.array()})
}

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}