let admins = ["fede", "maggi", "mari", "sarai"];
const session = require("express-session");

function adminValidator (req, res, next) {
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
