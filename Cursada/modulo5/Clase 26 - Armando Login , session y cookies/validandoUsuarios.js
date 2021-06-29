const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const admin = (req, res) => {
	//Código del controlador
const cambiarIdioma = (req, res) => {
	// Escribir tu código aquí
	req.session.idioma = req.query.idioma
	res.redirect('/');
}
	//Agregá un if y un else
	//dentro del if debe ir el código del controlador
	//dentro del else la redirección

	if (req.session.admin ){
		cambiarIdioma}
		else {
			res.redirect('/login')
		}
}