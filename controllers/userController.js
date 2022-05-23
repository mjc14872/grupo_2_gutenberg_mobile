const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../src/database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;

//Aqui tienen otra forma de llamar a cada uno de los modelos
const usuarios = db.Usuario;


//Llamamos y "re-escribimos" el JSON.
function findAll(){
	const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/database/models"), "utf-8"));
    return users;
 }

 function writeFile(array){
    const arrayString = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../src/database/models"), arrayString);
}



const userController = {
    'login': function (req, res) {
        res.render("login");
    },

    'list': (req, res) => {
        db.Usuario.findAll({
        })
            .then(usuarios => {
                res.render('listado-usuarios.ejs', { usuarios })
            })
    },

    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuarios) {
                res.render('detalle-usuario.ejs', { usuarios });
            });
    },

    'add': (req, res) => {
        db.Usuario.findAll()
            .then(function (usuarios) {
                res.render('registro', { usuarios });
            })
        return res.render('registro');
    },

    'create': (req, res) => {

        db.Usuario.create({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: req.body.categoria,
            image: req.file ? req.file.filename : "image-default.jpg",
            novedades: req.body.novedades,
            fechaCreacion: req.body.fechaCreacion,
            administrador: req.body.administrador,

        })
        db.Usuario.findAll({
        })
            .then(usuarios => {
                res.render('listado-usuarios.ejs', { usuarios })
            })
    },

    'delete': function (req, res) {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/user/listado-usuarios');
    },

    'edit': function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuarios) {
                res.render('editar-usuario.ejs', { usuarios })
            })
    },

    'processLogin': function (req, res) {
        db.Usuario.findAll()

        let users = findAll();
        const errors = validationResult(req);
       
        if (errors.errors.length > 0) {
            res.render("login", { errorsLogin: errors.mapped() })
        }
       
        const userFound = users.find(function (user) {
            return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
        })

        if (userFound) {
            //proceso session
            let user = {
                id: userFound.id,
                nombres: userFound.nombres,
                apellidos: userFound.apellidos,
                image: userFound.image,
            }

            req.session.usuarioLogueado = user;

            if (req.body.remember) {
                res.cookie("user", user.id, { maxAge: 60000 * 24 })
            }
            res.redirect("/")

        } else {
            res.render("login", { errorMsg: "Error credenciales invalidas" })
        }
    },

    perfil: function (req, res) {
        //obtengo los usuarios
        db.Usuario.findAll()
        let user = findAll()

        //lo busco en session
        if (req.session.usuarioLogueado) {
            res.locals.userLocals = req.session.usuarioLogueado;
        }

        // busco el usuario
        let userFound = user.find(function (usuario) {
            return usuario.id == req.params.id
        })

        //    devuelvo el formulario de edicion con informacion del usuario a editar
        res.render("perfil-usuario", { usuario: req.session.usuarioLogueado })
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
};

//Exportar el modulo
module.exports = userController;