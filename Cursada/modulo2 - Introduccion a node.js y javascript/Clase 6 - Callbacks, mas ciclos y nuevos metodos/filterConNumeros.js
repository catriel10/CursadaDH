/**
 * 
 * Filter con números
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.

Dame una pista
La función filter evalúa una condición sobre cada elemento. Si la condición no resulta verdadera, el elemento se descarta.
 */

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function (literal
){
return literal.aprobado === true;
}) ;

let desaprobados = estudiantes.filter(function (literal
    ){
    return literal.aprobado === false;
    }) ;
