/**
 * Buscando series
¡Listemos todas las series!

Tenemos una lista de muchas series almacenadas en la variable series. Nuestro trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.

Dame una pista
Usando el método get podemos solicitarle información a un servidor. Además, tené en cuenta que la variable series está declarada por detrás... aunque no la veas en el archivo index.js.
 */

const express = require('express');
const app = express();

app.get('/series', function (req,res) {
    res.send (series)
})