//TODO: agregar el path
const fs = require('fs');
const path = require('path');

//Llamamos y "re-escribimos" el JSON.
function findAll(){
	let data = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), "utf-8")
	let productos = JSON.parse(data);
	return productos
 }
 function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), string)
}

//Crear el Controller del producto. 
const productController = {

    detalleProducto: function(req, res){
        res.render("detalle-producto");
    },

    carritoCompras: function(req, res){
        res.render("carrito-compras");
    },

    listadoProductos: function(req, res){
        res.render("listado-productos");
    },

	create: function(req, res){
        //devuelvo el formulario de creacion de producto
        res.render("crear-producto")
    },

	store: function(req, res){
        //obtengo los productos
        let products = findAll()

        //creo el nuevo producto para agregar
        let newProduct = {
            id: products.length + 1,
            nombre: req.body.nombre ,      
            autor: req.body.autor,
            editorial: req.body.editorial,
            genero: req.body.genero,
            precio: req.body.precio,
            descuento: req.body.descuento,
            crowfounding: req.body. crowfounding,
            bestSeller: req.body.bestSeller,
            resenia: req.body.resenia,
            paginas: req.body.paginas,
            peso: req.body.peso,
            formato: req.body.formato,
            edicion: req.body.edicion,
            idioma: req.body.idioma,
            isbn: req.body.isbn,
            image: req.file.filename
        }
        
        //agrego el nuevo producto a mi listado de productos 
        products.push(newProduct);

        //modifico mi base de datos
        writeFile(products);
        
        //redirecciono al index
        res.redirect("/product/listado-productos");
    },

	edit: function(req, res){
        //obtengo los productos
        let products = findAll()

        //busco el producto
        let productFound = products.find(function(producto){
            return producto.id == req.params.id
        })

        //devuelvo el formulario de edicion con informacion del producto a editar
        res.render("editar-producto", {producto: productFound})
    },

	update: function(req, res){
        //obtengo los productos
        let products = findAll()

        //busco el producto que voy a actualizar
        let productFound = products.find(function(producto){
            return producto.id == req.params.id
        })

        //modifico el produto que busque
		productFound.nombre = req.body.nombre ;      
		productFound.autor = req.body.autor;
		productFound.editorial = req.body.editorial;
		productFound.genero = req.body.genero;
		productFound.precio = req.body.precio;
		productFound.descuento = req.body.descuento;
		productFound.crowfounding = req.body. crowfounding;
		productFound.bestSeller = req.body.bestSeller;
		productFound.resenia = req.body.resenia;
        //productFound.image= req.file.filename;
		productFound.paginas = req.body. paginas;
		productFound.peso = req.body.peso;
		productFound.formato = req.body.formato;
		productFound.edicion = req.body.edicion;
		productFound.idioma = req.body.idioma;
		productFound.isbn = req.body.isbn

        //modifico mi base de datos
        writeFile(products)

        //redirecciono al index
        res.redirect("/product/listado-productos");

    },

	destroy: function(req, res){
        //obtengo todos los productos
        let products = findAll()

        //busco el producto y obtengo su indice
        let productIndex = products.findIndex(function(producto){
            return producto.id == req.params.id	;

        })

        //elimino el producto que busque, pasando su indice 
        products.splice(productIndex, 1)

        //modifico mi base de datos
        writeFile(products) 

        //redirecciono al index
        res.redirect("/product/listado-productos");

    }
}

//Exportar el modulo
module.exports = productController;