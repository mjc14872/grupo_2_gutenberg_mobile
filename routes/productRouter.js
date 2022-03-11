//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar Multer
const multer = require('multer');

//TODO: agregar el mainController
const productController = require('../controllers/productController');

//TODO: agregar el controller login y registro
router.get("/detalle-producto", productController.detalleProducto);
router.get("/carrito-compras", productController.carritoCompras);
router.get("/listado-productos", productController.listadoProductos);

//Crear producto
router.get("/create", productController.create);  
router.post("/create", productController.store); 

//editar producto
router.get('/edit/:id', productController.edit); 
router.post('/edit/:id', productController.update); 

//eliminar producto
router.delete('/delete/:id', productController.destroy); 


//TODO: agregar el modulo
module.exports = router;