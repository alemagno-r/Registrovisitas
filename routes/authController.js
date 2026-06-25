const usuarioModel =
require("../models/usuarioModel");

exports.login = async (req,res)=>{

    try{

        const {
            correo,
            password
        } = req.body;

        const usuario =
        await usuarioModel.obtenerPorCorreo(
            correo
        );

        if(!usuario){

            return res.status(401).json({
                ok:false,
                mensaje:"Usuario no existe"
            });

        }

        if(usuario.password !== password){

            return res.status(401).json({
                ok:false,
                mensaje:"Contraseña incorrecta"
            });

        }

        req.session.usuario = {

            id: usuario.id_usuario,
            nombre: usuario.nombre_completo,
            rol: usuario.rol

        };

        return res.json({

            ok:true,
            usuario: req.session.usuario

        });

    }
    catch(error){

        console.log(error);

        return res.status(500).json({
            ok:false
        });

    }

};

exports.logout = (req,res)=>{

    req.session.destroy(()=>{

        res.json({
            ok:true
        });

    });

};