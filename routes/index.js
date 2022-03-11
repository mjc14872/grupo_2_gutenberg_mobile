//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');

//TODO: agregar el controller home, carrito de compras y detalle producto
router.get("/", mainController.index);

//TODO: agregar el modulo
module.exports = router;

