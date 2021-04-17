/**
 * exerciseProgressIcon
Declarando tres funciones
¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que contienen información) podemos declarar funciones (estructuras que procesan información).

Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).
Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución.

Dame una pista
Recordemos que las funciones son como las variables: una vez que las declaramos, podemos usarlas en cualquier lugar. Incluso dentro de otras funciones ;-)
 */

function anterior (n) {
    return n-1
};
function triple (n) {
    return n*3
};
function anteriorDelTriple (n) {
    return (n * 3 -1)
};