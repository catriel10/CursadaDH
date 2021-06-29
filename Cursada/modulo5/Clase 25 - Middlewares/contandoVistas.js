const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estadisticasController = require('../controllers/estadisticasController');
const visitasMiddleware = (req, res, next) => {
    estadisticasController.contarVisita(req)
    next();
 }

//Creá tu función visitasMiddleware

router.get('/home',visitasMiddleware, homeController.index); //Agregá la función visitasMiddleware como segundo parámetro de tu ruta