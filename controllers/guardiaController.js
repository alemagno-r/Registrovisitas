const guardiaModel =
require("../models/guardiaModel");

exports.listarHoy = async (
    req,
    res
)=>{

    try{

        const datos =
        await guardiaModel
        .obtenerVisitasHoy();

        res.json(datos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};

exports.registrarIngreso =
async(req,res)=>{

    try{

        const {
            idInvitacion
        } = req.body;

        await guardiaModel
        .registrarIngreso(
            idInvitacion
        );

        res.json({
            mensaje:
            "Ingreso registrado"
        });

    }catch(error){

    if(error.code === "ER_DUP_ENTRY"){

        return res.status(400).json({
            mensaje:"El ingreso ya fue registrado."
        });

    }

    console.log(error);

    res.status(500).json({
        mensaje:"Error interno"
    });

}};