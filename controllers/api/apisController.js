const db = require('../../src/database/models');
const bcrypt = require("bcryptjs");
//comentario
const apis = {
    usersList: function (req, res) {
        db.Usuario.findAll().then(usuarios => {
            let newData = usuarios.map(usuarios => {
                return {
                    id: usuarios.id,
                    nombres: usuarios.nombres,
                    apellidos: usuarios.apellidos,
                    email: usuarios.email,
                    endpoint: "/api/users/" + usuarios.id
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    count: usuarios.length,
                    url: "/api/users"
                },
                data: newData
            }
            res.json(respuesta)
        })
    },
    userDetail: function (req, res) {
        db.Usuario.findByPk(req.params.id).then(resultado => {
            let jsonUsuario = {
                meta:{
                    status: 200,
                    url: "/api/users/"+ req.params.id
                },
                data: {
                    id: resultado.id,
                    nombres: resultado.nombres,
                    apellidos: resultado.apellidos,
                    email: resultado.email,
                    avatar: "http://localhost:3001/images/avatars/" + resultado.image
                   
                }
            }
            res.json(jsonUsuario);
        })
    },
    productsList: function (req, res) {
        db.Libro.findAll({
            include: ["generos"],
        })
        .then(libros => {
            let dataNew = libros.map(libros => {
                return {
                    id: libros.id,
                    titulo: libros.titulo,
                    genero: libros.generos,
                    endpoint: "/api/products/" + libros.id
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    count: libros.length,
                     url: "/api/products"
                },
                data: dataNew
            }
            res.json(respuesta)
        })
    },
    productDetail: function(req, res){
        db.Libro.findByPk(req.params.id, {
            include:["autores","generos","formatos","medios", "idiomas"]
        }).then(libro =>{
            let productJson = {
                data:{
                    id:libro.id,
                    titulo: libro.titulo,
                    imagen: "http://localhost:3000/product/detalle-producto/" + libro.imagen,
                    autor: libro.autores,
                    formato: libro.formatos,
                    medio: libro.medios,
                    idioma: libro.idiomas,
                    description: libro.resenia,
                    genero: libro.generos,
                }
            }
            res.json(productJson)
        })
    },
    lastProducts: function(req, res){
        db.Libro.findAll({
            include:["generos"],
            order: [
                ["id", "DESC"],
            ],
            limit: 3
        })
        .then(libros => {
            let dataNew = libros.map(libros => {
                return {
                    id:libros.id,
                    titulo: libros.titulo,
                    imagen: "http://localhost:3000/product/detalle-producto/" + libros.imagen,
                    autor: libros.autores,
                    formato: libros.formatos,
                    medio: libros.medios,
                    idioma: libros.idiomas,
                    description: libros.resenia,
                    genero: libros.generos,
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products"
                },
                data: dataNew
            }
            res.json(respuesta)
        })
    },
    totalGenres:function(req, res){
        db.Genero.findAll()
        .then(generos => {
            let dataGenres = generos.map(generos => {
                return {
                    id: generos.id,
                    nombre: generos.nombre,
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    count: generos.length,
                     url: "/api/generos"
                },
                data: dataGenres
            }
            res.json(respuesta)
        })
    },
    genres:function(req, res){
        db.Genero.findAll({
            include:["libros"]
        })
        .then(generos => {
            let categorias = generos.map(generos => {
                return { 
                nombre: generos.nombre,
                count: generos.libros.length
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    url: "api/total-por-genero"
                },
                data: categorias
            }
            res.json(respuesta)
        })
    },
}
module.exports = apis