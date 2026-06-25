const usuarioModel =
require("../models/usuarioModel");

exports.listar = async (req,res)=>{

    try{

        const usuarios =
        await usuarioModel.obtenerTodos();

        res.json(usuarios);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};
exports.combo = async (req,res)=>{

    try{

        const usuarios =
        await usuarioModel.obtenerTodos();

        res.json(usuarios);

    }catch(error){

        console.log(error);

    }

};

exports.crear = async (req,res)=>{

    try{

        const {
            nombre,
            correo,
            password,
            rol,
            idUnidad
        } = req.body;

        await usuarioModel.crear(
            nombre,
            correo,
            password,
            rol,
            idUnidad
        );

        res.json({
            mensaje:"Usuario creado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error"
        });

    }

};