/**
 * Objeto Date
Algunos sitios web muestran la fecha y hora del momento exacto en que los visitamos. ¿Cómo es posible hacer esto? JavaScript nos brinda una forma para hacer este tipo de cosas.

Antes de seguir, recordemos que un objeto es la representación en código de un elemento de la vida real. Ahora sí, vamos con el objeto date.


En resumen


Date
Date un tiempo.

En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:

"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 

Ejemplo de cómo podría verse una fecha con este formato:

"Hoy es el día 0 del mes 4 del año 2019"

Funciones de Date que nos van a ayudar:

getDate()
getMonth()
getFullYear()

Dame una pista
Para el año debemos usar el método getFullYear.
 */
let miFecha = new Date (1977,11,29);

let fecha = new Date()

let dia = miFecha.getDate()
let mes = miFecha.getMonth()
let anio = miFecha.getFullYear()

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+dia+' del mes '+mes+' del año '+anio)

