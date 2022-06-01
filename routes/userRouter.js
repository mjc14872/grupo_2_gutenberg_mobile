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
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/avatars"));
    },
    filename: function (req, file, cb) {
        const newFile = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
        cb(null, newFile)
    }
<<<<<<< HEAD
  }) 
  const upload = multer({ storage: storage });

//Agregar el controller registro
router.get('/listado-usuarios', userController.list);

//router.get("/registro", userController.registro);
//router.get("/admin" , administrador, userController.admin);

//Crear usuario
router.get('/registro', userController.add);
router.post('/registro', upload.single('img'), userController.create);

//editar usuario
//router.get('/edit/:id', userController.edit); 
//router.patch('/edit/:id', userController.update); 

//eliminar usuario
//router.delete('/delete/:id', userController.destroy); 

//Agregar el controller login
//router.get("/login", userController.login);
router.post("/login", validator.login , userController.processLogin);
//router.get("/perfil",  upload.single('img'), userController.perfil);

//router.post("/logout", userController.logout);
=======
})
const upload = multer({ storage: storage });

//Agregar el controller registro de usuarios
router.get('/listado-usuarios', userController.list);

//vista administrador 
router.get("/admin", administrador, userController.admin);

//vista de usuario
router.get('/registro', upload.single('image'), userController.add);

//creacion de usuarios
router.post('/create', validator.registro, upload.single('image'), userController.create);

//editar usuario
router.get('/edit/:id', userController.edit);

//modificacion de usuario
router.patch('/edit/:id', userController.update);

//eliminar usuario
router.post('/delete/:id', userController.delete);

//detalle de usuario
router.get('/detail/:id', userController.detail);

//login usuario
router.get("/login", userController.login);

//proceso de login usuario
router.post("/login", validator.login, userController.processLogin);

//perfil usuario
router.get("/perfil", upload.single('image'), userController.perfil);

//editar usuario
router.get('/editar-password', userController.editpassword);


//cerrar sesion usuario
router.post("/logout", userController.logout);
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584

//TODO: agregar el modulo
module.exports = router;