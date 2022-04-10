const fs = require('fs');
const path = require('path');
const pathDeLog = path.join(__dirname, "../userLogs.txt");

function LogsMiddlewares (req, res, next){
    fs.appendFileSync(pathDeLog, 'El usuario ingreso a la ruta: ' + req.url + '\n');
    next();
}

module.exports = LogsMiddlewares;
