const invitacionModel =
require("../models/invitacionModel");

exports.listar = async (req,res)=>{

    try{

        const datos =
        await invitacionModel.obtenerTodas();

        res.json(datos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};

exports.crear = async (req,res)=>{

    try{

        const {
            idEvento,
            visitantes
        } = req.body;

        for(
            const visitante of visitantes
        ){

            await invitacionModel.crear(
                idEvento,
                visitante
            );

        }

        res.json({
            mensaje:
            "Invitaciones creadas"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};