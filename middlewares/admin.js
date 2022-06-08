let admins = ["fede", "maggi", "mari", "sarai"];
const session = require("express-session");

function adminValidator (req, res, next) {
    console.log('..... validando user');
    const user = req.session.usuarioLogueado;
    if(user){
        if(user.isAdmin){
            next();
        }
        else{
            res.redirect('/');
        }
    }else{
        res.send('usted no es un usuario :(');
    };

}

module.exports = adminValidator;
