'use strict'
//importo mi modelo para los metodos CRUD en la API
var Project = require('../modelos/proyectos');

var controller = {

home: function(req,res){
    return res.status(200).send({
      message : 'Soy la home'

    });


},

test: function(re,res){
    return res.status(200).send({

        message: 'Soy el metodo test del controlador'
    });

},

saveProject: function(req,res){
    //creo un objeto de mi modelo proyecto para acceder a las propiedades y asignarle un valor del nuevo modelo que guardare
var project = new Project();
  //recogemos los parametros del body que llegan por POST
  var params = req.body;
  project.name = params.name;
  project.description = params.description;
  project.categoria = params.categoria;
  project.lenguajes = params.lenguajes;
  project.year = params.year;
  project.image = null;
  
  //guardar en BD
  project.save((err,projectStored) =>{
    if(err) return res.status(500).send({
        message: 'error al guardar'
    });
    if(!projectStored) return res.status(404).send({

        message: 'no se a podido guardar el objeto'
    });
    return res.status(200).send({
        project: projectStored
    });

  });


},

//Devolver un documento por id
getProyect: function(req,res){
     ///recoge el id parametro de la url
    var projectId = req.params.id;
    //findById propiedades de mongoose
       Project.findById(projectId,(err, project)=>{
         if(err) return res.status(500).send({message:'Error de peticion'});

         if(!project) return res.status(404).send({message:'este id de documento no existe'});
         return res.status(200).send({
             project
         })

       })



},
//Devolver todos los documentos
getAllProjects: function(req,res){
      //devueltos de mas reciente a mas antiguo
      //existemas mas opciones de filtros con mongoose
   Project.find({}).sort('+year').exec((err,projects)=>{
     if(err) return res.status(500).send({message:'error de peticion'});
     if(!projects) return res.status(404).send({message:'no hay projectos que mostrar'});

     return res.status(200).send({
       projects
     })

   })

},

//Actualizar projectos
updateProjects: function(req,res){
    var ProjectUp = req.params.id;
    //recogemos todo el body de la peticion
    var update = req.body;
   //propiedad update de mongoose
    Project.findByIdAndUpdate(ProjectUp,update,{new:true},(err,projectUpdate)=>{
     if(err) return res.status(500).send({message:'error en put'});

     if(!projectUpdate) return res.status(404).send({message: 'no existe el documento'});

     return res.status(200).send({

        project: projectUpdate
     });

     


    });
},

deleteProjects: function(req,res){
    var projectDel = req.params.id;
    Project.findByIdAndRemove(projectDel,(err,projectRemove)=>{
    if(err) return res.status(500).send({message:'error al borrar el projecto'});
    if(!projectRemove) return res.status(404).send({message:'no se pudo borrar el projecto'});

    return res.status(200).send({
        project : projectRemove
    })

    })

}


};
//para exportar los metodos fuera de este archivo
module.exports = controller;