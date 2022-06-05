let admins = ["fede", "maggi", "mari", "sarai"];
const session = require("express-session");

function adminValidator (req, res, next) {
    // let user = req.query.user;
    const user = req.session.usuarioLogueado;
    if(user){
        if(user.isAdmin){
            next();
        }
        else{
            res.redirect('/');
        }
        // let admini = admins.find(function(admin){
        //    return user == admin;
        // });

        // if (admini != undefined){
        //     next();
        // }else{
        //     res.send(user + ' no sos admin');
        // };
    }else{
        res.send('usted no es un usuario :(');
    };

}

module.exports = adminValidator;
