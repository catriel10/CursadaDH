var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	//Escribí tu código acá
res.cookie('ultimoAcceso', new Date());
	//Código del controlador
}