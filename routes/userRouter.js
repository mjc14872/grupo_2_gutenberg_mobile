//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el mainController
const userController = require('../controllers/userController');

//TODO: agregar el controller login y registro
router.get("/login", userController.login);
router.get("/registro", userController.registro);

//TODO: agregar el modulo
module.exports = router;
