/**
 * Pasar un callback
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble. Esta recibirá un número y retornará el doble.

La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

Ejemplo:

aplicarCallBack(2, doble); // 4
aplicarCallBack(4, triple); // 12
Dame una pista
Una vez tengamos las funciones doble y triple es momento de crear la función aplicarCallback. Cuando la definamos, hay que tener en cuenta que recibe un valor y una función. Esa función se tendrá que ejecutar internamente para poder retornar el valor deseado.
 */

let doble = (numero1) => numero1 * 2;
let triple = (numero1) => numero1 * 3;
let aplicarCallback = (numero1, operacion) => operacion (numero1);

console.log (aplicarCallback(2,doble))
