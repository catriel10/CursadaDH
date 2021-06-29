const express = _require('express');
const app = express();
const usuario = {
    nombre: 'Máximo',
    apellido: 'Cozzetti'
};

//Agrear el middleware aquí
app.use(function (req, res, next) { req.usuario = usuario
next ();


}
)