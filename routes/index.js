const empleados = require('./empleados');

module.exports = class Routes {
    routes(app){
        app.use('/api',empleados);
    }
}