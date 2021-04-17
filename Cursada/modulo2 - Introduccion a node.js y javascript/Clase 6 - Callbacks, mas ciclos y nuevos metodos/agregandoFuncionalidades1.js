/*Agregando funcionalidades
Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Dame una pista
Ambas condiciones deben cumplirse a la vez: una persona debe de poder pagar cada cuota y el total del auto.*/

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
   },
totalDeVentas:function(){
      return this.listaDeVentas().reduce(function(totalVentas,venta){
         return totalVentas + venta
      },0)
   },
puedeComprar:function(autoPersona,persona){
      if ((persona.capacidadDePagoTotal >= autoPersona.precio)&&(persona.capacidadDePagoEnCuotas>=(autoPersona.precio/autoPersona.cuotas))){
         return true
      } else {
         return false
      }
   },

}
