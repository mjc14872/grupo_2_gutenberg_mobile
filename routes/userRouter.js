//Agregar librerias 
const path = require("path")
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const validator = require("../validator/validationForm");

//Agregar el mainController
const userController = require('../controllers/userController');

//Agregar Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null, path.join(__dirname,"../public/images/avatars"))
    },
    filename:(req, file, cb)=> {
        const newFile = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, newFile)
    }
  }) 
  const upload = multer({ storage: storage });

//Agregar el controller registro
router.get("/registro", userController.registro);

//Crear usuario
router.get("/create", userController.create);  
router.post("/create", upload.single('img'), validator.registro ,userController.usuario);

//editar usuario
router.get('/edit/:id', userController.edit); 
router.patch('/edit/:id', userController.update); 

//eliminar producto
router.delete('/delete/:id', userController.destroy); 

//Agregar el controller login
router.get("/login", userController.login);
router.post("/login", validator.login , userController.processLogin)
router.get("/perfil/:id", userController.perfil)

router.post("/logout", userController.logout);

//TODO: agregar el modulo
module.exports = router;
