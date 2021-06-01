/**
 * exerciseProgressIcon
Exportar rutas
En este ejercicio ya tenemos definidas las rutas relacionadas con los request de series.

Nuestro trabajo será hacer visible ese código para que podamos acceder al mismo desde otros archivos.

¿Cómo podemos hacerlo? ¿Quién es el encargado de modularizar todas estas rutas definidas?

Dame una pista
Deberemos exportar la variable router.
 */

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});

module.exports = router