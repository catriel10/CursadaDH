const express = require('express');
const app = express();

// Escribir tu código aquí
const session = require ("express-session")

app.use (session({secret: "frase secreta"}))