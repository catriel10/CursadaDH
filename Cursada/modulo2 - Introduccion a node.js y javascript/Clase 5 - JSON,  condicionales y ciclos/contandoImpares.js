/**
 * Contar impares
¡Vamos a crear una función interesante!

En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

Ejemplo:

console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares.
Dame una pista
Dentro del condicional del for, deberíamos utilizar el parámetro que es enviado a la función.
 */
function noParesDeContarImparesHasta(x){
    let cantidadImpar = 0; 
    for( let i = 0 ; i <= x ; i++ ){ 
           if (i % 2 !== 0) {
               cantidadImpar = cantidadImpar + 1 };  
    } return cantidadImpar;
    }