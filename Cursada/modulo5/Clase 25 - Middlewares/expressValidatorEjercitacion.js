const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const {check, validationResult, body} = require('express-validator');

const validateRegister = [
check('email').isEmail(),
check('password').isLength({ min: 6 })
]

router.post('/registro', [validateRegister], UsuarioController.registro);
