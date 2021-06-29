const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const cambiarIdioma = (req, res) => {
	// Escribir tu código aquí
	req.session.idioma = req.query.idioma

	res.redirect('/');
}
