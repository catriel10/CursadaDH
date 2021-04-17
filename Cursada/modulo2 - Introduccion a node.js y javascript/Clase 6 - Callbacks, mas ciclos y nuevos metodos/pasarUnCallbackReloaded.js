/**
 * 
exerciseProgressIcon
Pasar un callback reloaded
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

Para esto debemos completar la función procesar. Esta recibe dos parámetros:

1. El primer parámetro es un array.

2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

Dejamos unas funciones para comprender y probar con el ejemplo:


  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]
Dame una pista
Hay que tener en cuenta que la función procesar, además de recibir una función como parámetro, recibe un array de sitios webs. ¿Cómo podemos hacer para aplicarle A CADA UNO de esos sitios el callback que recibe como parámetro esta función?

 */


function agregarHttp(url) {
    return "http://" + url; 
    // escribí tu código aquí
}
function procesar(url,agregarHttp){
    let nuevoArray = []
    for (let i = 0;i<url.length;i++){
       nuevoArray.push (agregarHttp(url[i])) 
    }
return nuevoArray
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}
console.log (procesar(["www.google.com","www.yahoo.com"],agregarHttp));