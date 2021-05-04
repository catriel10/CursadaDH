/*Vayamos a nuestro perfil:

Queremos crear una ruta que use el método get y que apunte a "/perfil". Esta deberá devolver la variable saludo que está ya declarada.
Dame una pista
No hay que olvidarse de utilizar el método send() para enviar los datos al navegador. Recordemos que el método GET recibe dos parámetros: un request y un response, a alguno de ellos deberemos aplicarle ese método.*/

const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get ("/perfil", (req,res)=>{
res.send (saludo);
});
// Escribir tu código aquí