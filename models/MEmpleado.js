const Sequelize = require('sequelize');
const db = require ('../db');
const MEmpleado = db.define('empleado',{
    nombre: {
        type: Sequelize.STRING(25)
    },
    correo: {
        type: Sequelize.STRING(50)
    },
    celular: {
        type: Sequelize.STRING(10)
    },
    apellidoPaterno: {
        type: Sequelize.STRING
    },
    apellidoMaterno: {
        type: Sequelize.STRING
    },
    fechaRegistro: {
        type: Sequelize.DATE
    },
    estatus: {
        type: Sequelize.BOOLEAN
    }

}, {timestamps: false});
module.exports = MEmpleado;