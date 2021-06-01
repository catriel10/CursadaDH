/**
 * Modularizar rutas
Modularicemos las rutas para las series.

Queremos que el archivo series.js administre TODOS los request del recurso. Debemos, como primer paso, crear la variable express y almacenar en ella el módulo express.

Luego, deberemos crear la variable router y almacenar en ella la ejecución del método que nos permite manejar un sistema de rutas.

Dame una pista
Deberemos usar el método Router()
 */

const express = require('express');
const router = express.Router();
