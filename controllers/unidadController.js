const unidadModel =
require("../models/unidadModel");

exports.listar = async (req, res) => {

    try {

        const unidades =
        await unidadModel.obtenerTodas();

        res.json(unidades);

    } catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};
exports.combo = async (req,res)=>{

    try{

        const unidades =
        await unidadModel.obtenerTodas();

        res.json(unidades);

    }catch(error){

        console.log(error);

    }

};

exports.crear = async (req,res)=>{

    try{

        const { nombre } = req.body;

        if(!nombre){

            return res.status(400).json({
                mensaje:
                "Nombre obligatorio"
            });

        }

        await unidadModel.crear(nombre);

        res.json({
            mensaje:
            "Unidad creada"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }
    

};