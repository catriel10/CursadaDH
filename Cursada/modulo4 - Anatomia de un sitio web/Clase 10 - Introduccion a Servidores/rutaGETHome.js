/*Exploremos los diferentes métodos que podemos usar con el módulo express.

Nuestro trabajo será, utilizando el método get, crear una ruta hacia "/home" que devuelva la frase "Hola, estamos en el home". 

Dame una pista
No hay que olvidarse de utilizar el método send() para enviar los datos al navegador. Recordemos que el método GET recibe dos parámetros: un request y un response, a alguno de ellos deberemos aplicarle ese método.
*/

const express = require('express');
const app = express();

app.get ("/home", (req,res) => {
    res.send ("Hola, estamos en el home");
});

// Escribir tu código aquí