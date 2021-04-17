/**
 * 
exerciseProgressIcon
¿Están hablando de mí?
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.


Ejemplo:

menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true
Dame una pista
Existe el método indexOf que podemos usar para encontrar un determinado elemento. Si lo encuentra, nos devuelve el índice de ese elemento; si no, nos devuelve un -1.
 */

let texto = "No hay mal que por bien no venga"
let palabra = "mal"
function menciona (texto,palabra) {
if (texto.indexOf(palabra) !== -1){
    return true}
    else 
    {return false}
}
