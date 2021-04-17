/**
 * Practicando el if ternario
Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber cuál tiene el rodado más grande.
Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador ternario. El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que tenga el mayor rodado.

Dame una pista
Recordemos que el if ternario tiene la siguiente estructura: (condición) ? valor verdadero : valor falso;
 */

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande =(bicicletaA.rodado > bicicletaB.rodado) ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca )