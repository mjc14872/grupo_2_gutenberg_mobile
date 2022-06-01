const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../src/database/models');
<<<<<<< HEAD
const sequelize = db.sequelize;

//Aqui tienen otra forma de llamar a cada uno de los modelos
const usuarios = db.Usuario;


//Llamamos y "re-escribimos" el JSON.
function findAll(){
	const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/usersDataBase.json"), "utf-8"));
    return users;
 }

 function writeFile(array){
    const arrayString = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), arrayString);
}

const userController = {
    'list': (req, res) => {
        db.Usuario.findAll({         
        })
            .then(usuarios => {
                res.render('listado-usuarios.ejs', {usuarios})
            })
    },

    'add': (req, res) => {
        db.Usuario.findAll()
        .then(function (usuarios){
            res.render('resgistro', {usuarios});
        })
           return res.render('registro');
    },

    'create':(req, res) => {

=======
const { Op } = require("sequelize");
const sequelize = db.sequelize;

const userController = {
    'login': function (req, res) {
        res.render("login");
    },

    'admin': function (req, res) {
        res.render("vistaAdmin");
    },

    'list': (req, res) => {
        db.Usuario.findAll({
        })
            .then(usuarios => {
                res.render('listado-usuarios.ejs', { usuarios })
            })
    },

    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuarios) {
                res.render('detalle-usuario.ejs', { usuarios });
            });
    },

    'add': (req, res) => {
        db.Usuario.findAll()
            .then(function (usuarios) {
                res.render('registro', { usuarios });
            })
        return res.render('registro');
    },

    'create': (req, res) => {
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
        db.Usuario.create({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: req.body.categoria,
            image: req.file ? req.file.filename : "image-default.jpg",
            novedades: req.body.novedades,
<<<<<<< HEAD
            fechaCreacion: req.body.fechaCreacion,
            administrador: req.body.administrador,

        }).then(function(usuarios){
            return usuario.setusuarios(req.body.usuarios)
        })

        .then(function(){
           return res.redirect("/")
        });    
    },
//Crear el Controller con login y registro. 
//const userController = {
//   login: function(req, res){
//       res.render("login");
//   },
//   
//   registro: function(req, res){
//       res.render("registro");
//   },
//
//   admin: function(req, res){ 
//       res.render("vistaAdmin");
//   },
//
//    create: function(req, res){   
//       //devuelvo el formulario de creacion de registro
//       res.render("login")
//   },
//
//   usuario: function(req,res){
//       //obtengo los productos
//       let user = findAll()
//
//       //validacion de datos
//       const errors = validationResult(req)
//       if(errors.errors.length > 0){
//          return res.render("registro", {errors: errors.mapped()});
//       }else{ 
//       req.session.email = req.body.email;
//       req.session.nombres = req.body.nombres;
//       req.session.apellidos = req.body.apellidos;
//       req.session.password = bcrypt.hashSync(req.body.password, 10);
//       req.session.comedia = req.body.comedia;
//       req.session.accion = req.body.accion;
//       req.session.romance = req.body.romance;
//       req.session.infantiles = req.body.infantiles;
//       req.session.editoriales = req. body.editoriales;
//       req.session.categoria = req.body.categoria;
//       req.session.image = req.file ? req.file.filename : "image-default.jpg";
//       req.session.novedades = req.body.novedades

           //creo el nuevo usuario para agregar
//           let newUser = {
//           id: user.length + 1,
//           email: req.session.email,
//           nombres: req.session.nombres,
//           apellidos: req.session.apellidos,
//           password: bcrypt.hashSync(req.body.password, 10),
//           comedia: req.session.comedia,
//           accion: req.session.accion,
//           romance: req.session.romance,
//           infantiles: req.session.infantiles,
//           editoriales: req. session.editoriales,
//           categoria: req.session.categoria,
//           image: req.file ? req.file.filename : "image-default.jpg",
//           novedades: req.session.novedades
//       }
   
       //agrego el nuevo usuario a mi listado 
//       user.push(newUser);

       //modifico mi base de datos
//       writeFile(user);
   
       //redirecciono a registro
//       res.redirect("login"); 
//   }
//   },
//
//     edit: function(req, res){
//       //obtengo los usuarios
//       let user = findAll()
//
//       //busco el usuario
//       let userFound = user.find(function(usuario){
//           return usuario.id == req.params.id
//       })
//
//       //devuelvo el formulario de edicion con informacion del usuario a editar
//       res.render("editar-usuario", {usuario: userFound})
//   },
//
//   update: function(req,res){
//       //obtengo los usuarios
//       let user = findAll()
//
//       //busco el usuario que voy a actualizar
//       let userFound = user.find(function(usuario){
//           return usuario.id == req.params.id
//       })
//
//       //modifico el usuario que busque
//       userFound.email = req.body.email,
//       userFound.nombres = req.body.nombres,
//       userFound.apellidos = req.body.apellidos,
//       userFound.password = req.body.password,
//       userFound.comedia = req.body.comedia,
//       userFound.accion =req.body.accion,
//       userFound.romance = req.body.romance,
//       userFound.infantiles = req.body.infantiles,
//       userFound.editoriales = req. body.editoriales,
//       userFound.categoria = req.body.categoria,
//       userFound.image = req.file ? req.file.filename : userFound.image,
//       userFound.novedades = req.body.novedades
//   
//       //modifico mi base de datos
//       writeFile(user)
//
//       //redirecciono al perfil
//       res.render("perfil-usuario", {usuario:req.session.usuarioLogueado });
//   },
//
//   destroy: function(req, res){
//       //obtengo todos los productos
//       let user = findAll()
//
//       //busco el producto y obtengo su indice
//       let userIndex = user.findIndex(function(usuario){
//           return usuario.id == req.params.id	;
//       })
//
//       //elimino el producto que busque, pasando su indice 
//       user.splice(userIndex, 1)
//
//       //modifico mi base de datos
//       writeFile(user) 
//
//       //redirecciono al index
//       res.redirect("/user/registro");
//   },
//
//   processLogin: function(req, res){
//       let users = findAll();
//       const errors = validationResult(req);
//       
//       if(errors.errors.length > 0){
//           res.render("login", {errorsLogin: errors.mapped()})
//       }
//       const userFound = users.find(function(user){
//           return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
//       })
//
  //     if(userFound){
    //       //proceso session
//           let user = {
//               id: userFound.id,
//               nombres: userFound.nombres,
//               apellidos: userFound.apellidos,
//               image: userFound.image,
//           }
//
//           req.session.usuarioLogueado = user;
//
//           if(req.body.remember){ 
//               res.cookie("user", user.id, {maxAge: 60000 * 24})
//           }
//           res.redirect("/")
//           
//       }else{
//           res.render("login", {errorMsg: "Error credenciales invalidas"})
//       }
//   },
//
//   perfil:function(req, res){
//      //obtengo los usuarios
//      let user = findAll()

      //lo busco en session
//       if(req.session.usuarioLogueado){
//          res.locals.userLocals = req.session.usuarioLogueado;
//      }

       //busco el usuario
//       let userFound = user.find(function(usuario){
//           return usuario.id == req.params.id
//       })

       //devuelvo el formulario de edicion con informacion del usuario a editar
//       res.render("perfil-usuario", {usuario:req.session.usuarioLogueado })
//   },

//   logout:function(req, res){
//       req.session.destroy();       
//       res.clearCookie("user");
//       res.redirect("/");
//   }

=======
            administrador: req.body.administrador,

        })
        db.Usuario.findAll({
        })
            .then(usuarios => {
                res.render('login', { usuarios })
            })
    },

    'edit': function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuarios) {
                res.render('editar-usuario.ejs', { usuarios })
            })
    },

    'update': function (req, res) {
        db.Usuario.update({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            //password: bcrypt.hashSync(req.body.password, 10),
            categoria: req.body.categoria,
            image: req.file ? req.file.filename : "image-default.jpg",
            novedades: req.body.novedades,
            administrador: req.body.administrador,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/")
    },

    'delete': function (req, res) {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/user/listado-usuarios');
    },

    'processLogin': function (req, res) {
        const errors = validationResult(req);

        if (errors.errors.length > 0) {
            return res.render("login", { errorsLogin: errors.mapped() })
        }

        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(userFound => {
                if (userFound && bcrypt.compareSync(req.body.password, userFound.password)) {
                    //proceso session
                    let user = {
                        id: userFound.id,
                        nombres: userFound.nombres,
                        apellidos: userFound.apellidos,
                        image: userFound.image,
                        categoria: userFound.categoria,
                    }

                    req.session.usuarioLogueado = user;

                    if (req.body.remember) {
                        res.cookie("user", user.id, { maxAge: 60000 * 24 })
                    }
                    res.redirect("/")
                } else {
                    res.render("login", { errorMsg: "Error credenciales invalidas" })
                }
            })
    },

    'perfil': function (req, res) {
      console.log(req.session.usuarioLogueado)
      res.render("perfil-usuario", { usuario: req.session.usuarioLogueado })
    },

    'editpassword': function (req, res) {
        db.Usuario.update({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect("/")
    },

    'logout': function (req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
};

//Exportar el modulo
module.exports = userController;