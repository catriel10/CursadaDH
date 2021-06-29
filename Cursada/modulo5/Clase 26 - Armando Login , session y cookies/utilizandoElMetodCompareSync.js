const bcrypt = require('bcrypt');
const password = '123456';
const passwordEncriptada = bcrypt.hashSync(password, 10);


// Escribir tu código aquí
//	console.log('El password es correcto');
 // true
if ( bcrypt.compareSync(password, passwordEncriptada) == true){
    console.log ('El password es correcto')
}

