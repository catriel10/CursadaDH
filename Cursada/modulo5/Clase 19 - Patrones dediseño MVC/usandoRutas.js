/**
 * Usando rutas
Desde el archivo index.js queremos acceder a las rutas que expone el archivo series.js. Nuestro trabajo será requerir ese módulo y almacenarlo en la variable rutasSeries. Por último, queremos que sea ese módulo el encargado de manejar todas las solicitudes que lleguen del recurso series (endpoint series).

Antes de empezar, tener en cuenta que estamos manejando un sistema de rutas y la organización de directorios es MUY importante, por lo tanto, el archivo series.js se encuentra almacenado en la carpeta routes.

Dame una pista
Deberemos usar el método use()
 */
const express = require('express');
const app = express();

const rutasSeries = require('./routes/series')

app.use('/series', rutasSeries);