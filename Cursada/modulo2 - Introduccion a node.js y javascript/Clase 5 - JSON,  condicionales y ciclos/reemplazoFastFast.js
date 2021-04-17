/**
 * 
 * Reemplazo fast fast
Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'


Dame una pista
Para este ejercicio podemos usar la función replace para manipular las cadenas de texto (strings).
 */
let texto = "Me encanta la montaña"
let palabraBusco = "montaña"
let palabraCambio = "mar" 

function reemplazoFastFast (texto,palabraBusco,palabraCambio){

return texto.replace (palabraBusco, palabraCambio)
}