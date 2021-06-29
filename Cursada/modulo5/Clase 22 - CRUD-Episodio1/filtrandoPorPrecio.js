const express = require('express');
const router = express.Router();
const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get('/celulares', (req, res) => {
  let filtroCelulares = [] 
  
   for ( let i =0; i < celulares.length; i++){
   if  (celulareas[i].precio < 20000 )
   filtroCelulares.push (celulareas[i])}
})
