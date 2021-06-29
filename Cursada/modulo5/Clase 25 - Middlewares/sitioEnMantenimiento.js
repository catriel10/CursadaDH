const express = require('express');
const app = express();
let enMantenimiento = false;

//Agrear el middleware aquí

app.use(function enMantenimiento(req, res, next) {
        if ( enMantenimiento =! false ){
res.render('en-mantenimiento');}

next();

}
)
