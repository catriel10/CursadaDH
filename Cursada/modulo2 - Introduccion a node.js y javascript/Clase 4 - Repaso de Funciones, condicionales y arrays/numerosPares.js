/**
 * Números pares
Hagamos una función más. La función debe llamarse esPar, debe recibir un número como parámetro, y nos devolverá un booleano (true/false) indicándonos si ese número es divisible por dos.

Tips: utilizar la consola para probar la función esPar y observar si devuelve el resultado esperado. Recordar utilizar el operador módulo.

Dame una pista
Recordemos que se puede utilizar el operador módulo "%" para obtener el resto de una división. Por ejemplo, "4 % 2" -> Retorna "0" ya que 4 dividido 2 tiene como resto 0.

 */

function esPar (n) {
    return n % 2 == 0
};
console.log (esPar(4))