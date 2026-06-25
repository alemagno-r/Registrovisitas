exports.verificarSesion = (req,res,next)=>{

    if(!req.session.usuario){

        return res.status(401).json({
            ok:false,
            mensaje:"Debe iniciar sesión"
        });

    }

    next();

};
exports.adminOUsuario = (req,res,next)=>{

    const rol =
    req.session.usuario.rol;

    if(
        rol === "ADMINISTRADOR" ||
        rol === "USUARIO"
    ){

        return next();

    }

    return res.status(403).json({
        ok:false,
        mensaje:"Acceso denegado"
    });

};

exports.soloAdmin = (req,res,next)=>{

    if(
        req.session.usuario.rol !==
        "ADMINISTRADOR"
    ){

        return res.status(403).json({
            ok:false,
            mensaje:"Acceso denegado"
        });

    }

    next();

};

exports.soloGuardia = (req,res,next)=>{

    if(
        req.session.usuario.rol !==
        "GUARDIA"
    ){

        return res.status(403).json({
            ok:false,
            mensaje:"Acceso denegado"
        });

    }

    next();

};

exports.adminOUsuario = (req,res,next)=>{

    const rol =
    req.session.usuario.rol;

    if(
        rol === "ADMINISTRADOR" ||
        rol === "USUARIO"
    ){

        return next();

    }

    return res.status(403).json({
        ok:false,
        mensaje:"Acceso denegado"
    });

};