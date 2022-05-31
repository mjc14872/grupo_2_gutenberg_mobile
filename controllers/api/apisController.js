const db = require('../../src/database/models');
const bcrypt = require("bcryptjs");

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
                    avatar: "http://localhost:3000/images/avatars/" + resultado.image
                   
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
                    description: libros.resenia,
                    genero: libros.generos,
                    imagen: "http://localhost:3000/product/detalle-producto/" + libros.imagen,
                    endpoint: "/api/products/" + libros.id
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    count: libros.length,
                     url: "/api/users"
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
}
module.exports = apis