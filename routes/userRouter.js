//Agregar librerias 
const express = require('express');
const router = express.Router();

//Agregar Multer
const multer = require('multer');

//Agregar el mainController
const userController = require('../controllers/userController');

//Agregar el controller registro
router.get("/registro", userController.registro);
router.post("/registro", userController.usuario);

//Agregar el controller login
router.get("/login", userController.login);

//Crear usuario
router.get("/create", userController.create);  
router.post("/create", userController.usuario);

//editar usuario
router.get('/edit/:id', userController.edit); 
router.patch('/edit/:id', userController.update); 

//eliminar producto
router.delete('/delete/:id', userController.destroy); 

//TODO: agregar el modulo
module.exports = router;
