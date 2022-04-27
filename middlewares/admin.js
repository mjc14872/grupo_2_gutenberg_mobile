let admins = ["fede", "maggi", "mari", "sara"];

function adminValidator (req, res, next) {
    let user = req.query.user;
    if(user){

        let admini = admins.find(function(admin){
           return user == admin;
        });

        if (admini != undefined){
            next();
        }else{
            res.send(user + ' no sos admin');
        };
    }else{
        res.send('usted no es un usuario :(');
    };

}

module.exports = adminValidator;
