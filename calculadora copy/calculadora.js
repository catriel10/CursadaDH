let sumar = require ("./sumar");
let restar = require ("./restar");
let multiplicar = require ("./multiplicar");
let dividir = require ("./dividir");

let calculadora  = (numero1, numero2, operacion) => operacion (numero1,numero2)

console.log (calculadora(3,3, sumar))
