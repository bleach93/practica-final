const express = require ('express');
const router = express.Router();

const EmpleadosEmpleadoController = require('../controllers/empleados/empleado');

router.get('/empleados', EmpleadosEmpleadoController.get);

router.post('/empleados', EmpleadosEmpleadoController.post);

router.put('/empleados', EmpleadosEmpleadoController.put);


module.exports = router;