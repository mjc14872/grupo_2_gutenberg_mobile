//Agregar lo que requerimos
const path = require('path');

//TODO: crear el mainController
const mainController = {
    index: function(req, res){
        res.render("index");
    },

    ofertas: function(req, res){
        res.render("ofertas");
    },

    admin: function(req, res){
        res.send('Sos Administrador ' + req.query.user)
    }
};

//Exportar el modulo
module.exports = mainController;