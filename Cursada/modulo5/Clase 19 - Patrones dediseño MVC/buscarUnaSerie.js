/**
 * 
 * Buscar una serie
Veamos cómo armar nuestra primera ruta parametrizada con Express.

Queremos crear una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. Ese número representará el id de la serie que estamos queriendo ver. Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.

Un ejemplo de cómo se vería la ruta sería el siguiente: http://localhost/serie/3

Recordemos que la variable está declarada por detrás y podemos disponer de ella con solo nombrarla.

Dame una pista
En la ruta nos va a llegar un parámetro que va a ir variando: el id de la serie. Nuestro trabajo será averiguar qué serie se corresponde con ese número. ¿Cómo podemos hacerlo? TIP: recordemos que podemos hacer uso de todo lo visto hasta el momento: condicionales, métodos y más.
 */

const express = require('express');
const app = express();

app.get('/serie/:id', function (req,res) {

let idSerie = req.params.id; 

let laSerie= series.find (serie => serie.id == idSerie)
res.send (laSerie)
})
