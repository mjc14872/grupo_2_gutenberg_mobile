//TODO: agregar el path
const fs = require('fs');
const path = require('path');

//Llamamos y "re-escribimos" el JSON.
function findAll(){
	let data = fs.readFileSync(path.join(__dirname, "../data/usersDataBase.json"), "utf-8")
	let users = JSON.parse(data);
	return users
 }
 function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), string)
}

//TODO: crear el Controller con el index, login y registro. 
const userController = {
    login: function(req, res){
        res.render("login");
    },
    
    registro: function(req, res){
        res.render("registro");
    },
    usuario: function(req,res){
    let user = findAll()
    let newUser = {
        id: user.length + 1,
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        correo:req.body.correo,
        confirmarEmail:req.body.confirmarEmail,
        password:req.body.password,
        confirmarPassword:req.body.confirmarPassword,
        categoriasDeinteres:req.body.categoriasDeinteres,
        PerfilDeUsuario:req.body.PerfilDeUsuario

    }
    
    //agrego el nuevo usuario a mi listado 
    user.push(newUser);

    //modifico mi base de datos
    writeFile(user);
    
    //devuelvo una respuesta 
    //redirecciono al listado de productos
    res.redirect("/product/listado-productos");
},

    
};

//TODO: agregar exportar el modulo
module.exports = userController;