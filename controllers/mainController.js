//Agregar lo que requerimos
const path = require('path');
const db = require('../src/database/models');


//TODO: crear el mainController
const mainController = {
    index: function(req, res){
        res.render("index");
    },

    ofertas: function(req, res){
        const user = req.session.usuarioLogueado;
        db.Libro.findAll({include: ['autores'], attributes: ['id','imagen', 'titulo', 'autores.nombres', 'autores.apellidos','precio_unitario'], where: {descuento: 1}})
        .then(function(libros){
            // console.log('===== libros: '+(libros[0][6]))
            res.render("ofertas", { user, libros });
        })
    },
};

//Exportar el modulo
module.exports = mainController;