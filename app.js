//Utilizaremos Express para crear un servidor Node y para manejar las rutas y peticiones HTTP
//importamos la libreria de express
var express = require('express');
//importamos la libreria de body-parser
var bodyParser = require('body-parser');

var app = express();

//archivos de rutas
var project_routes = require('./routes/project');

//middlewares(son capas o metodo que se ejecutan antes de una accion de un controlador)
//Configuramos que cualquier peticion que me llegue la convierta en JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
//opcional,si queremos anteponerle /api a la URL de routes
app.use('/api',project_routes);


module.exports = app;




