var express = require('express');
var router = express.Router();
const apisController= require("../controllers/api/apisController");

//Usuarios
router.get('/users', apisController.usersList);
router.get("/users/:id" , apisController.userDetail);
//Productos
router.get('/products', apisController.productsList);
router.get('/products/:id', apisController.productDetail);

module.exports = router;