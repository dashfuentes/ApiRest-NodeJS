//Utilizaremos Express para crear un servidor Node y para manejar las rutas y peticiones HTTP
//importamos la libreria de express
var express = require('express');
//importamos la libreria de body-parser
var bodyParser = require('body-parser');

var app = express();

//archivos de rutas

//middlewares(son capas o metodo que se ejecutan antes de una accion de un controlador)
//Configuramos que cualquier peticion que me llegue la convierta en JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
//Ruta de test con GET
//recibe una request y una response
//request datos que envio desde el cliente
//responde respuesta del servidor
app.get('/test',(req,res) =>{
    res.status(200).send({
  mesaage:"Hola desde api NodeJS"
    });
});
app.get('/',(req,res) =>{
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    );
});
//exportar modulo 
module.exports = app;




