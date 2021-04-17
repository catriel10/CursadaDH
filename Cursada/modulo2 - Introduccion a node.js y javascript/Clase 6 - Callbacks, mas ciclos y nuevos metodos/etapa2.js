/*Etapa 2
Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.

Dame una pista
Cuidado al usar arrow functions, te recomendamos usar function().*/

const autos = require ("./autos")
/* requerir módulo autos */
   /*const concesionaria = {
  completar 
   autos: autos
};*/
let concesionaria = {
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
 }
}