/**
 * Usando Number()
Ya vimos cómo declarar una variable y asignarle el tipo de dato que queramos como valor. Ahora, creemos 3 variables numéricas, pero esta vez haciendo uso de la función nativa Number().

Una función nativa es una función que ya existe en el lenguaje de JavaScript, no tenemos que definirla, solo ejecutarla en el momento en que la necesitemos. En el caso de la función Number(),  esta espera que le pasemos un parámetro dentro de los paréntesis para trasformar el dato que le hayamos pasado, en un tipo de dato numérico. Por ejemplo:

var unNuevoNumero = Number('50');
// La función hará que solo se tome el valor 50 como dato numérico (cuando se lo pasamos como parámetro 
era un string) y lo va a dejar almacenado en la variable unNuevoNumero


IMPORTANTE: Si utilizamos la función Number() y como parámetro le pasamos un dato que no puede convertirse en número —como por ejemplo el string "hola"—, nos va a devolver Nan. Esto es un valor con el cual no podemos operar como si fuese un número (Not a Number).

Sabiendo esto, creemos tres variables utilizando la función Number(), las mismas se deberán llamar positivo, negativo y decimal. Cada una de ellas deberá almacenar un número que se corresponda con su nombre. En la variable positivo, almacenar un número positivo; en la variable  negativo, almacenar un número negativo; y en la variable decimal, almacenar un número decimal.

Dame una pista
Recordemos que sí o sí tenemos que usar la función Number() y dentro de los paréntesis tenemos que pasarle a la función un valor como parámetro. Y ¡ojo! la N de Number va en mayúscula.
 */

let positivo = Number('1');
let negativo = Number('-1');
let decimal = Number('1.73');