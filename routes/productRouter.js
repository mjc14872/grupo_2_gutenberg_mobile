//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el path
const path = require('path');

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
  const upload = multer({ storage: storage })


//TODO: agregar el productController
const productController = require('../controllers/productController');

//TODO: agregar el controller login y registro
router.get("/detalle-producto", productController.detalleProducto);
router.get("/carrito-compras", productController.carritoCompras);
router.get("/listado-productos", productController.listadoProductos);

//Crear producto
router.get("/create", productController.create);  
router.post("/create", upload.single('img'), productController.store); 

//editar producto
router.get('/edit/:id', productController.edit); 
router.patch('/edit/:id', productController.update); 

//eliminar producto
router.delete('/delete/:id', productController.destroy); 


//TODO: agregar el modulo
module.exports = router;