/**
 * Destructuring
Desestructuremos.
Para este ejercicio contamos con un array de destinos del mundo ya definido.

Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".

Dame una pista
Recordemos que tenemos que saber en que posición se encuentran los valores.
 */
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [,bariloche, , china] = destinosDelMundo;

console.log (bariloche);
console.log (china);
