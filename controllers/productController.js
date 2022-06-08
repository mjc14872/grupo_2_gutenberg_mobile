const path = require('path');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const session = require("express-session");
const Libro = require('../src/database/models/Libro');

// const fetch = require('node-fetch');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Libros = db.Libro;
const medios = db.Medio;
const Autores = db.Autor;
const Formatos = db.Formato;
const Idiomas = db.Idioma;
const Generos = db.Genero;
const Carritos = db.Carrito;
// const user = req.session.usuarioLogueado;


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
        const user = req.session.usuarioLogueado
        db.Libro.findAll({
            include: ["autores"]

        })
            .then(libros => {
                res.render('listado-productos.ejs', { libros, user });
            })
    },
    'detail': (req, res) => {
        const user = req.session.usuarioLogueado;
        db.Libro.findByPk(req.params.id,
            {
                include: [ 'autores', 'generos', 'formatos', 'medios', 'idiomas']
            })
            .then(libro => {
                res.render('detalle-producto', { libro, user });
            });

    },
    'shop': (req, res) => {
        const user = req.session.usuarioLogueado
        db.Libro.findByPk(req.params.id,
            {
                include: ["autores"]
            })
            .then(libro => {
                res.render('carrito-compras.ejs', { libro, user});
            });
    },
    'car': (req, res) => {
        const user = req.session.usuarioLogueado
        db.Carrito.findAll({
            include: ["medios", "usuarios"]

        })
            .then(carritos => {
                res.render('listado-carrito.ejs', { carritos, user });
            })
    },
    'create': (req, res) => {
        const user = req.session.usuarioLogueado
        db.Genero.findAll()
        .then(function(generos) {
            db.Idioma.findAll()
                .then(function(idiomas) {
                    db.Formato.findAll()
                        .then(function(formatos) {
                            db.Medio.findAll()
                                .then(function(medios) {
                                    db.Autor.findAll()
                                        .then(function(autores){
                                            console.log('autores >>>> '+autores);
                                            return res.render("crear-producto", {idiomas, generos, formatos, medios, autores, user});
                                        })
                                })
                        })
                })
        })
    },
    'store': (req, res) => {
        // console.log('Por guardar '+req.body.titulo+' '+req.body.autor+' '+req.body.editorial+' '+req.body.imagen);
        const user = req.session.usuarioLogueado
        x = db.Libro.create({
            titulo: req.body.titulo,
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
        // console.log('Redirigiendo a product...'+x);
        res.redirect("/product", { user });
    },
    listar: function(req, res) {
        const user = req.session.usuarioLogueado
        db.Libro.findAll()
            .then(function(libros){
                res.render("listado-productos", { libros:libros, user })
            })
    },
    
    editar: function(req, res) {
        const user = req.session.usuarioLogueado
        let pedidoLibro = db.Libro.findByPk(req.params.id);
        let pedidoGenero = db.Genero.findAll();
        let pedidoIdioma = db.Idioma.findAll();
        let pedidoFormato = db.Formato.findAll();
        let pedidoMedio = db.Medio.findAll();
        let pedidoAutor = db.Autor.findAll();

        Promise.all([pedidoLibro, pedidoGenero, pedidoIdioma, pedidoFormato, pedidoMedio, pedidoAutor])
            .then(function([libro, generos, idiomas, formatos, medios, autores]){
                res.render("editar_admin", 
                {libro, generos, idiomas, formatos, medios, autores, user});
            })
    },
    actualizar: function(req, res){
        db.Libro.update({
            titulo: req.body.titulo,
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
            generos_id: req.body.genero,
            idiomas_id: req.body.idioma,
            formatos_id: req.body.formato,
            autores_id: req.body.autor,
            medios_id: req.body.medio
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/product/");
    },
    borrar: function(req, res) {
        db.Libro.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/product");
    }
}
module.exports = productController;
