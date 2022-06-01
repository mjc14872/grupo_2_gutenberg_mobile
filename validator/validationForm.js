<<<<<<< HEAD
const { check, body } = require("express-validator")
const fs = require("fs");
const path = require("path");

const db = require('../src/database/models');


const validator = {
    login: [
        check("email")
            .notEmpty()
            .withMessage("El campo email no puede estar vacio")
            .isEmail()
            .withMessage("Formato de email es incorrecto"),
        check("password")
            .notEmpty()
            .withMessage("El campo password no puede estar vacio")
    ],
    registro: [
        check("email")
            .notEmpty()
            .withMessage("El campo email no puede estar vacio")
            .bail()
            .isEmail()
            .withMessage("Formato de email es incorrecto")
            .bail()
            .custom(function (value) {
                let users = findAll()
                //busco al usuario
                let userFound = users.find(function (user) {
                    return user.email == value
                })
                //si existe un usuario devuelvo el error
                if (userFound) {
                    throw new Error("¡El Email ya se encuentra registrado!");
                }
                //sino devuelvo true
                return true
            }),
        check("nombres")
            .notEmpty()
            .withMessage("El campo Nombre no puede estar vacio"),
        check("apellidos")
            .notEmpty()
            .withMessage("El campo Apellido no puede estar vacio"),
        check("password")
            .notEmpty()
            .withMessage("El campo Password no puede estar vacio"),
        check("categoria")
            .notEmpty()
            .withMessage("El campo categoria no puede estar vacio"),
    ]
}

module.exports = validator
=======
//const { check, body } = require("express-validator")
//const fs = require("fs");
//const path = require("path");
//
//function findAll() {
//    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/usersDataBase.json"), "utf-8"));
//    return users;
//}
//
//const validator = {
//    login: [
//        check("email")
//            .notEmpty()
//            .withMessage("El campo email no puede estar vacio")
//            .isEmail()
//            .withMessage("Formato de email es incorrecto"),
//        check("password")
//            .notEmpty()
//            .withMessage("El campo password no puede estar vacio")
//    ],
//    registro: [
//        check("email")
//            .notEmpty()
//            .withMessage("El campo email no puede estar vacio")
//            .bail()
//            .isEmail()
//            .withMessage("Formato de email es incorrecto")
//            .bail()
//            .custom(function (value) {
//                let users = findAll()
//                //busco al usuario
//                let userFound = users.find(function (user) {
//                    return user.email == value
//                })
//                //si existe un usuario devuelvo el error
//                if (userFound) {
//                    throw new Error("¡El Email ya se encuentra registrado!");
//                }
//                //sino devuelvo true
//                return true
//            }),
//        check("nombres")
//            .notEmpty()
//            .withMessage("El campo Nombre no puede estar vacio"),
//        check("apellidos")
//            .notEmpty()
//            .withMessage("El campo Apellido no puede estar vacio"),
//        check("password")
//            .notEmpty()
//            .withMessage("El campo Password no puede estar vacio"),
//        check("categoria")
//            .notEmpty()
//            .withMessage("El campo categoria no puede estar vacio"),
<<<<<<< HEAD
//        check("fechaCreacion")
//            .notEmpty()
//            .withMessage("El campo fechaCreacion no puede estar vacio"),
=======
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
//    ]
//}
//
//module.exports = validator
>>>>>>> a2b06d1dba659adc91c64904c7e4240ebc5dd5a8
