//modelo basado en la entidad de la BD
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
//crear el objeto molde de la tabla proyects
//le paso todas las propiedades de la tabla
var ProjectSchema  = Schema({
name: String,
description: String,
categoria : String,
Lenguajes: String,
year : Number,
image: String

});

//exporto el modelo para hacer el guardado de la entidad Proyects,y le paso el esquema que se a creado
//mongoose pluraliza y lo ponde en minusculas la entidades de la BD por eso lo guardamos solo como proyect y no proyects
module.exports = mongoose.model('Proyect',ProjectSchema);

