/*Una nueva funcionalidad extra
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.

Dame una pista
Recordá utilizar el this para ejecutar funciones dentro del mismo objeto literal.*/

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
autosParaLaVenta:function (autos){
   return this.autos.filter(function(sefue){
      return sefue.vendido == false
})
},
autosNuevos: function (autosParaLaVenta){
   return this.autosParaLaVenta(autos).filter(function(autos0KM){
      return autos0KM.km < 100
})
}
}
