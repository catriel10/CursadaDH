/*Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

Dame una pista
Cuidado al usar arrow functions.*/

const autos = require ("./autos")
const concesionaria = {
    autos: autos,
 buscarAuto:  function (reciboPatente){
let autoEncontrado = autos.find (function(auto,index){
          return auto.patente == reciboPatente
       })
    if (autoEncontrado != null){
          return autoEncontrado}
    else{
             return null
          }
  },
  venderAuto: function (reciboPatente){
    this.buscarAuto(reciboPatente).vendido = true
},
}
/*concesionaria.venderAuto('APL123')
console.log (concesionaria.buscarAuto('APL123'))*/