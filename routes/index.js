//Agregamos lo que vamos a requerir
const express = require('express');
const router = express.Router();

//Agregar el Controlador
const mainController = require('../controllers/mainController');
//const adminValidator = require('../middlewares/admin');

//TODO: agregar el controller home, carrito de compras y detalle producto
router.get("/", function(req, res){
    res.render("index", {title:'express'});
});
router.get("/ofertas", mainController.ofertas);

//Exportamos el modulo
module.exports = router;

