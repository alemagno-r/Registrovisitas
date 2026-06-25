const dashboardModel =
require("../models/dashboardModel");

exports.resumen =
async (req,res)=>{

    try{

        const datos =
        await dashboardModel
        .obtenerResumen();

        res.json(datos);

    }
    catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};