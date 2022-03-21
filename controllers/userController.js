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

//Crear el Controller con login y registro. 
const userController = {
    login: function(req, res){
        res.render("login");
    },
    
    registro: function(req, res){
        res.render("registro");
    },

     create: function(req, res){
        //devuelvo el formulario de creacion de registro
        res.render("registro")
    },

    usuario: function(req,res){
        //obtengo los productos
        let user = findAll()
    
        //creo el nuevo producto para agregar
        let newUser = {
        id: user.length + 1,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        check_email: req.body.check_email,
        password: req.body.password,
        check_password: req.body.check_password,
        /*comedia: req.body.comedia,
        accion: req.body.accion,
        romance: req.body.romance,
        infantiles: req.body.infantiles,
        editoriales: req.body.editoriales,*/
        intereses: req.body.intereses,
        categoria: req.body.categoria,
        novedades: req.body.novedades
        }
    
        //agrego el nuevo usuario a mi listado 
        user.push(newUser);

        //modifico mi base de datos
        writeFile(user);
    
        //redirecciono a registro
        res.redirect("/user/registro");
    },

      edit: function(req, res){
        //obtengo los usuarios
        let user = findAll()

        //busco el usuario
        let userFound = user.find(function(usuario){
            return usuario.id == req.params.id
        })

        //devuelvo el formulario de edicion con informacion del usuario a editar
        res.render("editar-usuario", {usuario: userFound})
    },

    update: function(req,res){
        //obtengo los productos
        let user = findAll()

        //busco el usuario que voy a actualizar
        let userFound = user.find(function(usuario){
            return usuario.id == req.params.id
        })
    
        //modifico el usuario que busque
        userFound.nombres = req.body.nombres,
        userFound.apellidos = req.body.apellidos,
        userFound.email = req.body.email,
        userFound.check_email = req.body.check_email,
        userFound.password = req.body.password,
        userFound.check_password = req.body.check_password,
        /*userFound.comedia = req.body.comedia,
        userFound.accion = req.body.accion,
        userFound.romance = req.body.romance,
        userFound.infantiles = req.body.infantiles,
        userFound.editoriales = req.body.editoriales,*/
        userController.intereses = req.body.intereses,
        userFound.categoria = req.body.categoria,
        userFound.novedades = req.body.novedades
    
        //modifico mi base de datos
        writeFile(user)

        //redirecciono al index
        res.redirect("/user/registro");
    },

    destroy: function(req, res){
        //obtengo todos los productos
        let user = findAll()

        //busco el producto y obtengo su indice
        let userIndex = user.findIndex(function(usuario){
            return usuario.id == req.params.id	;

        })

        //elimino el producto que busque, pasando su indice 
        user.splice(userIndex, 1)

        //modifico mi base de datos
        writeFile(user) 

        //redirecciono al index
        res.redirect("/user/registro");
    }
};

//Exportar el modulo
module.exports = userController;