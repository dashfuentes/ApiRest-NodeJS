//Importamos la libreria de moongoose para la conexion BD
var mongoose = require('mongoose');
//importamos el modulo app para la configuracion y arrancar el server Node
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PortafolioBD')
  .then(()=>{
console.log("Conexion exitosa!!")

//creacion del servidor
   app.listen(port, ()=>{
console.log("Servidor Corriendo en localhost:3700");

   })

  })
  .catch(err => console.log(err));
  //luego correr npm start