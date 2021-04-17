/**
 * Usando parseInt()
Una buena forma de aprender a usar una función nativa es pasarle distintos tipos de datos y ver qué pasa en cada caso. Vamos a hacer uso de esa práctica.

En este caso vamos a utilizar otra función nativa llamada parseInt(). Esta nos devuelve el valor entero de un dato que le pasemos como parámetro, siempre y cuando el mismo se pueda operar como dato numérico. Por ejemplo:

var valorEntero = parseInt('167.64');
// La función hará que solo se tome el valor 167 y lo va a dejar almacenado en la variable valorEntero.


IMPORTANTE: Esta función no redondea, ¡solo devuelve el valor entero del número! 

Ahora sí, probemos:

Tenemos una variable ya declarada llamada nan a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que haga que la misma no pueda operar con el valor dado, es decir, que nos devuelva el valor NaN.
Además, tenemos una variable ya declarada llamada correcta, a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que haga que la misma sí pueda operar.
Dame una pista
En este caso queremos que completes los espacios en blanco (no dejes ningún guión) con las consignas dadas. Es necesario que utilices la función parseInt() en ambos casos.
 */

const nan = parseInt("Hola" *1.73)
const correcto = parseInt( 1.73)