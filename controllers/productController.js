//TODO: agregar el path
const fs = require('fs');
const path = require('path');

function findAll(){
	let data = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"), "utf-8")
	let productos = JSON.parse(data);
	return productos
 }
 function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), string)
}
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
            autor: req.body.price,
            editorial: req.body.editorial,
            genero: req.body.genero,
            precio: req.body.precio,
            descuento: req.body.descuento,
            crowfounding: req.body. crowfounding,
            bestSeller: req.body.bestSeller,
            resenia: req.body.resenia,
            paginas: req.body. paginas,
            peso: req.body.peso,
            formato: req.body.formato,
            edicion: req.body.edicion,
            idioma: req.body.idioma,
            isbn: req.body.isbn,

        }
        
        //agrego el nuevo producto a mi listado de productos 
        products.push(newProduct);

        //modifico mi base de datos
        writeFile(products);
        
        //devuelvo una respuesta 
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
       // productFound.id =  products.length + 1;
		productFound.nombre = req.body.nombre ;      
		productFound.autor = req.body.price;
		productFound.editorial = req.body.editorial;
		productFound.genero = req.body.genero;
		productFound.precio = req.body.precio;
		productFound.descuento = req.body.descuento;
		productFound.crowfounding = req.body. crowfounding;
		productFound.bestSeller = req.body.bestSeller;
		productFound.resenia = req.body.resenia;
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

module.exports = productController;
















/*const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const productController = {
    detalleProducto: function(req, res){
        res.render("detalle-producto");
    },

    carritoCompras: function(req, res){
        res.render("carrito-compras");
    },
	create: function(req, res){
        res.render("crear-producto");
    },
	// Create -  Method to store
	store: (req, res) => {
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: 'default-image.png'
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('editar-producto', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}

};



//TODO: agregar exportar el modulo
module.exports = productController;*/