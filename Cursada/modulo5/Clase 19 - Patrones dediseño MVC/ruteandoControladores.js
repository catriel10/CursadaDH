/**
 * Ruteando controladores
Habiendo finalizado un día exitoso y estando apunto de levantarnos de la silla, viene nuestro Project Manager y nos implora que antes de irnos agreguemos una funcionalidad más: "Por favor, necesito que se pueda agregar un producto al carrito, porfis, porfis".
Resulta que si bien se trabajó en el carritoController, este no fue redireccionado por una ruta. Por lo cual, desde el navegador, no se puede acceder a la lógica de negocio del carrito.
Al analizar el carritoController, el Project Manager nos comenta que la ruta del carrito tiene un parámetro dinámico que debemos llamar item, el cual representa el item a agregar (antes de ser Project Manager era programador también).

Debemos analizar el siguiente código y agregar tanto la funcionalidad agregarItem del carritoController como crear la ruta dinámica item. 

Dame una pista
Recordar que, para poder utilizar rutas dinámicas, estas deben utilizar el ":" y luego el nombre con el que se va a referir el parámetro. Ejemplo: /:productoID Nos dice que la ruta va a ir variando y ese valor será almacenado como productoID
 */

let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item',carritoController.agregarItem)

module.exports = router