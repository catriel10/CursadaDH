/*Total de ventas
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

Dame una pista
Recordá que si la lista esta vacía, el reduce falla en la ejecución. ¿Por qué puede pasar esto?*/

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

}
