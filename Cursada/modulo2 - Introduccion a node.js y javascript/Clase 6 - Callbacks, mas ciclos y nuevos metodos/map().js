/**
 * Hagamos lío...

Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos atrasar una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.

Dame una pista
El método map recorre el array original y devuelve uno nuevo con las alteraciones que hayamos definido para cada elemento.
 */
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(menosUno){
    return menosUno - 1;
})

console.log (horariosAtrasados);
