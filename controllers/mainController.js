//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const mainController = {
    index: function(req, res){
        res.render("index");
    },
    ofertas: function(req, res){
        res.render("ofertas");
    },
};

//TODO: agregar exportar el modulo
module.exports = mainController;