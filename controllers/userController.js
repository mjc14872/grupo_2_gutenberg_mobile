const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../src/database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;

const userController = {
    'login': function (req, res) {
        res.render("login");
    },

    'admin': function (req, res) {
        res.render("vistaAdmin");
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
                res.render('login', { usuarios })
            })
    },

    'edit': function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuarios) {
                res.render('editar-usuario.ejs', { usuarios })
            })
    },

    'update': function (req, res) {
        db.Usuario.update({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: req.body.categoria,
            image: req.file ? req.file.filename : "image-default.jpg",
            novedades: req.body.novedades,
            administrador: req.body.administrador,

        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/user/listado-usuarios")
    },

    'delete': function (req, res) {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/user/listado-usuarios');
    },

    'processLogin': function (req, res) {
        const errors = validationResult(req);

        if (errors.errors.length > 0) {
            return res.render("login", { errorsLogin: errors.mapped() })
        }

        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(userFound => {
                if (userFound && bcrypt.compareSync(req.body.password, userFound.password)) {
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
            })
    },

    'perfil': function (req, res) {
        res.render("perfil-usuario", { usuario: req.session.usuarioLogueado })
    },

    'logout': function (req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
};

//Exportar el modulo
module.exports = userController;