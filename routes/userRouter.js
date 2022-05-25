const path = require("path")
const express = require('express');
const router = express.Router();
const validator = require("../validator/validationForm");

//Agregar el mainController
const userController = require('../controllers/userController');
const administrador = require('../middlewares/admin');

//Agregar Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb)=> {
        cb(null, path.join(__dirname,"../public/images/avatars"));
    },
    filename: function(req, file, cb) {
        const newFile = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
        cb(null, newFile)
    }
  }) 
  const upload = multer({ storage: storage });

//Agregar el controller registro
router.get('/listado-usuarios', userController.list);

//router.get("/registro", userController.registro);
router.get("/admin" , administrador, userController.admin);

//Crear usuario
router.get('/registro', userController.add);
/*router.post('/registro', upload.single('img'), userController.create);*/
router.post('/create', upload.single('image'), userController.create);

//editar usuario
router.get('/edit/:id', userController.edit); 
router.patch('/edit/:id', userController.update); 

//eliminar usuario
//router.delete('/delete/:id', userController.destroy); 

//Agregar el controller login
router.get("/login", userController.login);
router.post("/login", userController.processLogin);
router.get("/perfil",  upload.single('img'), userController.perfil);

router.post("/logout", userController.logout);

//TODO: agregar el modulo


router.post('/delete/:id', userController.delete);
router.get('/detail/:id', userController.detail);

module.exports = router;