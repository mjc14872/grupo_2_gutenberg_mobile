const path = require('path');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
// const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Libros = db.Libro;
const Tipo_medio = db.Tipo_medio;
const Autores = db.Autor;
const Formatos = db.Formato;
const Idiomas = db.Idioma;
const Generos = db.Genero;

// const API = 'http://www.omdbapi.com/?apikey=8669f632';

const productController = {
    'list': (req, res) => {
        db.Libro.findAll({
            include: ["autores"]
          
        })
            .then(libros => {
                res.render('listado-productos.ejs', {libros})
            })
    },
    'detail': (req, res) => {
        db.Libro.findByPk(req.params.id,
            {
                include : ["autores"]
            })
            .then(libro => {
                res.render('detalle-producto.ejs', {libro});
            });
    },
    'shop':(req, res) => {
    db.Libro.findByPk(req.params.id,
        {
            include : ["autores"]
        })
    .then(libro => {
        res.render('carrito-compras.ejs', {libro});
    });
},
}
module.exports = productController;