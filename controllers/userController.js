//TODO: agregar el path
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//Llamamos y "re-escribimos" el JSON.
function findAll(){
	const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/usersDataBase.json"), "utf-8"));
    return users;
 }

 function writeFile(array){
    const arrayString = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), arrayString);
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

        //validacion de datos
        const errors = validationResult(req)
        if(errors.errors.length > 0){
           return res.render("registro", {errors: errors.mapped()})
        }
    
        //creo el nuevo producto para agregar
        let newUser = {
        id: user.length + 1,
        email: req.body.email,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        password: bcrypt.hashSync(req.body.password, 10),
        comedia: req.body.comedia,
        accion: req.body.accion,
        romance: req.body.romance,
        infantiles: req.body.infantiles,
        editoriales: req. body.editoriales,
        categoria: req.body.categoria,
        image: req.file.filename,
        //image: req.file ? req.file.filename : "image-default",
        novedades: req.body.novedades
        }
    
        //agrego el nuevo usuario a mi listado 
        user.push(newUser);

        //modifico mi base de datos
        writeFile(user);
    
        //redirecciono a registro
        res.redirect("registro"); //redireccionar a login cambiarlo cuando este ok todo el codigo
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
        //obtengo los usuarios
        let user = findAll()

        //busco el usuario que voy a actualizar
        let userFound = user.find(function(usuario){
            return usuario.id == req.params.id
        })
    
        //modifico el usuario que busque
        userFound.email = req.body.email,
        userFound.nombres = req.body.nombres,
        userFound.apellidos = req.body.apellidos,
        userFound.password = req.body.password,
        userFound.comedia = req.body.comedia,
        userFound.accion =req.body.accion,
        userFound.romance = req.body.romance,
        userFound.infantiles = req.body.infantiles,
        userFound.editoriales = req. body.editoriales,
        userFound.categoria = req.body.categoria,
        //userFound.image = req.file.filename,
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
    },

    processLogin: function(req, res){
        let user = findAll()
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){
            res.render("login", {errorsLogin: errors.mapped()})
        }

        const userFound = users.find(function(user){
            return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
        })

        if(userFound){
            //proceso session
            let user = {
                id: userFound.id,
                name: userFound.name,
                last_name: userFound.last_name,
                avatar: userFound.avatar,
            }

            req.session.usuarioLogueado = user;

            if(req.body.remember){
                res.cookie("user", user.id, {maxAge: 60000 * 24})
            }else{
                res.redirect("/")
            }

        }else{
            res.render("login", {errorMsg: "Error credenciales invalidas"})
        }
    },

    logout:function(req, res){
        req.session.destroy();       
        res.clearCookie("user");
        res.redirect("/");
    }

};

//Exportar el modulo
module.exports = userController;