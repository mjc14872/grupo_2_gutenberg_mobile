//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar Multer
const multer = require('multer');

//TODO: agregar el mainController
const userController = require('../controllers/userController');

//TODO: agregar el controller registro
router.get("/registro", userController.registro);
router.post("/registro", userController.usuario);

//TODO: agregar el controller login
router.get("/login", userController.login);





//TODO: agregar el modulo
module.exports = router;
