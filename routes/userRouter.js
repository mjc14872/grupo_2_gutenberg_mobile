//Agregar librerias 
const path = require("path")
const express = require('express');
const router = express.Router();

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
router.post("/create", upload.single('img'), userController.usuario);

//editar usuario
router.get('/edit/:id', userController.edit); 
router.patch('/edit/:id', userController.update); 

//eliminar producto
router.delete('/delete/:id', userController.destroy); 

//Agregar el controller login
router.get("/login", userController.login);

//TODO: agregar el modulo
module.exports = router;
