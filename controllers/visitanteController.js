const visitanteModel =
require("../models/visitanteModel");

exports.listar = async (req,res)=>{

    try{

        const visitantes =
        await visitanteModel.obtenerTodos();

        res.json(visitantes);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};
exports.combo = async (req,res)=>{

    try{

        const visitantes =
        await visitanteModel.obtenerTodos();

        res.json(visitantes);

    }catch(error){

        console.log(error);

    }

};

exports.crear = async (req,res)=>{

    try{

        const {
            nombre,
            tipoDocumento,
            documento,
            correo,
            telefono
        } = req.body;

        let rut = null;
        let pasaporte = null;

        if(
            tipoDocumento === "RUT"
        ){

            rut = documento;

        }else{

            pasaporte = documento;

        }

        await visitanteModel.crear(
            nombre,
            tipoDocumento,
            rut,
            pasaporte,
            correo,
            telefono
        );

        res.json({
            mensaje:
            "Visitante creado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};