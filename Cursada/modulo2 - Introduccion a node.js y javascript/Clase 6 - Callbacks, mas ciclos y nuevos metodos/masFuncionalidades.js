/*Más funcionalidades
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Dame una pista
Recordá utilizar el this para llamar a una funcionalidad dentro del mismo objeto literal.*/

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
},
   listaDeVentas: function (){
      let ventas = []
      this.autos.filter(function(elemento){
         if (elemento.vendido == true){
            ventas.push(elemento.precio)
         }
      })
      return ventas;
   }
}
