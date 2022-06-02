
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
        body('email')
      .isEmail()
      .notEmpty()
      .custom((emailUnico, {req})=>{
         return db.Usuario.findOne({
            where: {email: req.body.email }
         })
         .then((user)=>{
            if (user){
               return Promise.reject('E-mail en uso');
            }
            })
      })
   ,

        body("nombres")
            .notEmpty()
            .withMessage("El campo Nombre no puede estar vacio"),
        body("apellidos")
            .notEmpty()
            .withMessage("El campo Apellido no puede estar vacio"),
        body("password")
            .notEmpty()
            .withMessage("El campo Password no puede estar vacio"),
        body("categoria")
            .notEmpty()
            .withMessage("El campo categoria no puede estar vacio"),
        body('image')
            .custom((value,{req})=>{
               let file=req.file.originalname;
            
               let extensionArchivo= (path.extname(file)).toLowerCase();
               
               console.log(extensionArchivo.toString() != '.jpeg')
      
               if (extensionArchivo.toString() == '.jpeg' || extensionArchivo.toString() == '.gif'){
                  return true 
               } else {
                  throw new Error('img format is incorrect');
               }
                 
               
            })
      
    ]
}

module.exports = validator

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
//    ]
//}
//
//module.exports = validator

