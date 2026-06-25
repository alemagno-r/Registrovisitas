const eventoModel =
require("../models/eventoModel");

exports.listar = async (req,res)=>{

    try{

        const eventos =
        await eventoModel.obtenerTodos();

        res.json(eventos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};
exports.obtenerPorId = async (req,res)=>{

    try{

        const evento =
        await eventoModel.obtenerPorId(
            req.params.id
        );

        res.json(evento);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};

exports.eliminar = async (req,res)=>{

    try{

        await eventoModel.eliminar(
            req.params.id
        );

        res.json({
            mensaje:"Evento eliminado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error eliminando evento"
        });

    }

};

exports.actualizar = async (req,res)=>{

    try{

        const {
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar
        } = req.body;

        await eventoModel.actualizar(
            req.params.id,
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar
        );

        res.json({
            mensaje:"Evento actualizado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error actualizando evento"
        });

    }

};

exports.crear = async (req,res)=>{

    try{

        const {
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar,
            idUnidad,
            anfitrionPrincipal,
            anfitriones
        } = req.body;

        const resultado =
        await eventoModel.crear(
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar,
            idUnidad,
            anfitrionPrincipal
        );

        const idEvento =
        resultado.insertId;

        if(anfitriones){

            for(
                const usuario of anfitriones
            ){

                await eventoModel
                .agregarAnfitrion(
                    idEvento,
                    usuario
                );

            }

        }

        res.json({
            mensaje:"Evento creado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};