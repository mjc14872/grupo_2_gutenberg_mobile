const db = require("../src/database/models")

function recordame(req, res, next){ 
    if(!req.session.usuarioLogueado && req.cookies.recordame){
        db.User.findOne({
            where:{
                id: req.cookies.recordame
            }
        }).then(function(user){
            req.session.usuarioLogueado = user;
            return next()
        })
    }else{
        return next()
    }
        
}
module.exports = recordame;
