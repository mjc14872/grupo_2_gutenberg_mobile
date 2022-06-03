const path = require('path');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
// const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Libros = db.Libro;
const medios = db.Medio;
const Autores = db.Autor;
const Formatos = db.Formato;
const Idiomas = db.Idioma;
const Generos = db.Genero;
const Carritos = db.Carrito;

// const API = 'http://www.omdbapi.com/?apikey=8669f632';

const productController = {
    'search': (req, res) => {
        db.Libro.findAll({
            include: ["autores"],
            where: {
                titulo: { [Op.like]: '%' + req.query.search + '%' }
            }

        })
            .then(libros => {
                res.render('listado-productos.ejs', { libros });
            })
    },
    'list': (req, res) => {
        db.Libro.findAll({
            include: ["autores"]

        })
            .then(libros => {
                res.render('listado-productos.ejs', { libros });
            })
    },
    'detail': (req, res) => {
        db.Libro.findByPk(req.params.id,
            {
                include: ["autores"]
            })
            .then(libro => {
                res.render('detalle-producto.ejs', { libro });
            });
    },
    'shop': (req, res) => {
        db.Libro.findByPk(req.params.id,
            {
                include: ["autores"]
            })
            .then(libro => {
                res.render('carrito-compras.ejs', { libro });
            });
    },
    'car': (req, res) => {
        db.Carrito.findAll({
            include: ["medios", "usuarios"]

        })
            .then(carritos => {
                res.render('listado-carrito.ejs', { carritos });
            })
    },
    'create': (req, res) => {
        db.Genero.findAll()
        .then(function(generos) {
            db.Idioma.findAll()
                .then(function(idiomas) {
                    db.Formato.findAll()
                        .then(function(formatos) {
                            db.Medio.findAll()
                                .then(function(medios) {
                                    console.log('generos >>>> '+generos);
                                    return res.render("crear-producto", {idiomas, generos, formatos, medios});
                                })
                        })
                })
        })
    },
    'store': (req, res) => {
        console.log('Por guardar '+req.body.titulo+' '+req.body.autor+' '+req.body.editorial+' '+req.body.imagen);
        x = db.Libro.create({
            titulo: req.body.titulo,
            autor:req.body.autor,
            editorial: req.body.editorial,
            precio_unitario: req.body.preciounitario,
            descuento: req.body.descuento,
            bestSeller: req.body.bestseller,
            resenia: req.body.resenia,
            paginas: req.body.paginas,
            peso: req.body.peso,
            edicion: req.body.edicion,
            isbn: req.body.isbn,
            cantidad: req.body.cantidad,
            imagen: req.file ? req.file.filename : "image-default.jpg",
            generos_id: req.body.genero,
            idiomas_id: req.body.idioma,
            formatos_id: req.body.formato,
            autores_id: req.body.autor,
            medios_id: req.body.medio
        });
        console.log('Redirigiendo a product...'+x);
        res.redirect("/product");
    },
    listar: function(req, res) {
        db.Libro.findAll()
            .then(function(libros){
                res.render("listado-productos", {libros:libros})
            })
    },
    detalle_admin: function(req, res) {
        // console.log(req.params.id);
        db.Libro.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "formato"},
                      {association: "idioma"}, {association: "medio"}]
        })
            .then(function(libro) {
                res.render("detalle_admin", {libro});
            })
    
    },


}
module.exports = productController;
