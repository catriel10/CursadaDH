const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);

// Escribir tu código aquí
const hash2 = hash1
if (hash1 == hash2){
    console.log ('los hash son iguales')
}