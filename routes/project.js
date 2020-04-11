//configuracion de a ruta del controller project

var express = require('express');
//cargo mi controlador
var ProjectController = require('../controllers/proyect');

//creo mi ruta
var router = express.Router();
//accedo al metodo home de mi controlador
router.get('/home',ProjectController.home);
router.post('/test', ProjectController.test);

router.post('/save-project',ProjectController.saveProject);

router.get('/project/:id', ProjectController.getProyect);

router.get('/projects',ProjectController.getAllProjects);

router.put('/project/:id',ProjectController.updateProjects);

router.delete('/project/:id',ProjectController.deleteProjects);

//exporto la configuracion de mis rutas
module.exports = router;