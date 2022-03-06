//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const userController = {
    login: function(req, res){
        res.render("login");
    },
    
    registro: function(req, res){
        res.render("registro");
    },
};

//TODO: agregar exportar el modulo
module.exports = userController;