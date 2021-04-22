const MEmpleado = require('../../models/MEmpleado');


module.exports = class EmpleadosEmpleadoController {
    static async post(req, res){
        const interfazEmpleado = {
            nombre: '',
            correo: '',
            celular: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaRegistro: new Date(),
            estatus: true,
        };

        const data = Object.assign(interfazEmpleado,req.body);

        if(!data.nombre || !data.correo || !data.celular || !data.apellidoMaterno || !data.apellidoPaterno){
            res.status(500).json({error: 'Favor de ingresar la informacion correcta'});
            return;
        }
        const empleado = await MEmpleado.create(data);
        res.status(200).json({
            id: empleado.id,
        });
    }
    static async get(req, res){
        const empleadoId = req.query.empleadoId ? + req.query.empleadoId: 0;
        let where = {
            estatus : true,
        }
        if (empleadoId){
            where.id = empleadoId
        }
        const data = await MEmpleado.findAll({
            attributes: ['id','nombre','apellidoPaterno','apellidoMaterno','correo','celular','estatus'],
            where,
        });
        if (!data){
            res.status(500).json({error: 'No se encontraron resultados'});
            return;
        }
        res.status(200).json(data);
    }
    static async put(req,res){
        const interfazEmpleado = {
            nombre : '',
            correo : '',
            celular : '',
            apellidoMaterno : '',
            apellidoPaterno: '',
            fechaRegistro : new Date(),
            estatus : true
        }
        const data = Object.assign(interfazEmpleado,req.body);
        const empleadoId = req.query.empleadoId ? +req.query.empleadoId : 0;
        if(!empleadoId){
            res.status(500).json({error:'Favor de ingresar toda la informacion!'});
            return;
        }

        if(!data.nombre || !data.correo || !data.celular || !data.apellidoMaterno || !data.apellidoPaterno){
            res.status(500).json({error:'Favor de ingresar toda la informacion!'});
            return;
        }

        const empleadoFind = await MEmpleado.findOne({
            where: {
                id:empleadoId
            }
        })
        if(!empleadoFind){
            res.status(500).json({error:'El usuario que desea actualizar no existe!'});
            return;
        }

        //Gerenacion de consulta de actualizacion
        const empleado = await MEmpleado.update({
            nombre : data.nombre,
            correo : data.correo,
            celular : data.celular,
            apellidoMaterno :data.apellidoMaterno,
            apellidoPaterno : data.apellidoPaterno,
            estatus :data.estatus    
        },{
            where: {
                id : empleadoFind.id
            }
        })
        if(empleado){
            res.status(200).json({
                estatus:true,
            });
        }else{
            res.status(500).json({error: 'No se pudo actualizar el usuario en la base de datos!' })
        }
    }
}