//Agregar librerias
const path = require('path');
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//Agregar el productController
const productController = require('../controllers/productController');

//TODO: agregar Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb)=> {
      cb(null, path.join(__dirname,"../public/images"))
    },
    filename:(req, file, cb)=> {
        const newFile = file.fieldname + Date.now() + path.extname(file.originalname);
        cb(null, newFile)
    }
  }) 
  const upload = multer({ storage: storage });

router.get('/search', productController.search);
router.get('/listado-productos', productController.list);
router.get('/detalle-producto/:id', productController.detail);
router.get('/carrito-compras/:id', productController.shop);
router.get('/listado-carrito/', productController.car);
router.get("/", productController.listar);

//Crear producto
 router.get("/create", productController.create);  
 router.post("/create", upload.single('imagen'), productController.store); 

//editar producto
router.get("/editar/:id", productController.editar);
router.post("/editar/:id", productController.actualizar);

//eliminar producto
router.post('/delete/:id', productController.borrar); 

//creacion de autores
router.get('/crear_autor', productController.crear_autor);
router.post('/crear_autor', productController.guardar_autor);

//TODO: agregar el modulo
module.exports = router;