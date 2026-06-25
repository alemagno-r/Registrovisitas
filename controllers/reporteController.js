const reporteModel =
require("../models/reporteModel");

exports.resumen = async (
    req,
    res
)=>{

    try{

        const datos =
        await reporteModel
        .resumenHoy();

        res.json(datos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};
exports.detalle = async (req,res)=>{

    try{

        const datos =
        await reporteModel
        .detalleAsistencia();

        res.json(datos);

    }
    catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};

exports.eventos = async (
    req,
    res
)=>{

    try{

        const datos =
        await reporteModel
        .reporteEventos();

        res.json(datos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};