const express = require('express');

const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){

    //Agregar nuevos pacientes via POST
    
    router.post('/pacientes', pacienteController.nuevoCliente );



    //Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes);






    //obtiene un paciente por ID
    //tener : antes de la variable lo usa como comodin
    router.get('/pacientes/:id',
    pacienteController.obtenerPaciente )


    //Actualizar un registro con el id
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente)



    //Eliminar un registro de la BD
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente)

    


    return router;  
}