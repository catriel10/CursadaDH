var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;

	//Agregá el if elses acá

 if (req.cookies.estilo == undefined) {
res.render('/', {estilo: "default"});		 
 }	
 else{
let estilo = req.cookies.estilo	 

res.render('/', {estilo: estilo});	

 }


	//Código del controlador
}