
const {check, body, validationResult} = require("express-validator")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require('../src/database/models');


const validator = {
    login:[
        body("email")
            .notEmpty()
            .withMessage("El campo email no puede estar vacio")
            .bail()
            .isEmail()
            .withMessage("Formato de email  incorrecto")
            .bail()
            .custom(function(value, {req}){
                return db.Usuario.findOne({
                where:{ email: value }
                    }).then(usuario => {
                        if(!usuario){
                            return Promise.reject("Usuario o contraseña invalidos")
                        }
                        if(!bcrypt.compareSync(req.body.password, usuario.password)){
                            return Promise.reject("Usuario o contraseña invalidos")
                        }
                    })
                }),
        body("password")
            .notEmpty()
            .withMessage("El campo password no puede estar vacio")
    ],

    registro:[
        body("nombres")
            .notEmpty()
            .withMessage("El campo Nombre no puede estar vacio"),
        body("apellidos")
            .notEmpty()
            .withMessage("El campo Apellido no puede estar vacio"),
        body('email')
            .isEmail()
            .withMessage("Formato de Email valido")
            .bail()
            .custom(function(value){
                return db.Usuario.findOne({
                    where:{
                        email: value
                    }
                }).then(usuario => {
                    if(usuario){
                        return Promise.reject("Email ya esta registrado!")
                    }
                })
            }),
        body("password")
            .notEmpty()
            .withMessage("El campo Password no puede estar vacio")
            .bail()
            .isLength({min: 8})
            .withMessage("La contraseña debe tener un minimo de 8 caracteres"),
        body("categoria")
            .notEmpty()
            .withMessage("El campo categoria no puede estar vacio"),
        body('image')
        .custom(function(value, {req}){
            return req.file;
        })
        .withMessage("La Imagen es Obligatoria")
        .bail()
        .custom(function(value, {req} ){
            const imagenesValidas = [".jpg", ".jpeg", ".png"]
            const extencion = path.extname(req.file.originalname);
            return imagenesValidas.includes(extencion);               
        })
        .withMessage("La extension del archivo no es valida")
    ]
}

module.exports = validator

