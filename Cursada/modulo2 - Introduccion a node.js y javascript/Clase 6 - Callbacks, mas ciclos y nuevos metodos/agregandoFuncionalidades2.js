/*Agregando funcionalidades
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?





Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Dame una pista
Recordá ejecutar la función.*/

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
autosQuePuedeComprar: function (persona){
      console.log(this.autosParaLaVenta())
      return this.autosParaLaVenta().filter(function(autoPersona){
         return ((persona.capacidadDePagoTotal >= autoPersona.precio)&&(persona.capacidadDePagoEnCuotas>=(autoPersona.precio/autoPersona.cuotas)) )== true
/*
   return this.puedeComprar(autopat, persona) == true*/
      })
   }
}
let persona ={
nombre: 'Juan',
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}
console.log (concesionaria.autosQuePuedeComprar(persona))
