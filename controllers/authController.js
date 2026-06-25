const db = require("../config/db");

exports.login = async (req, res) => {

    try {

        const {
            correo,
            password
        } = req.body;

        if (
            !correo ||
            !password
        ) {

            return res.status(400).json({
                ok: false,
                mensaje:
                "Correo y contraseña obligatorios"
            });
        }

        const [rows] =
        await db.execute(
            `
            SELECT *
            FROM usuario
            WHERE correo = ?
            `,
            [correo]
        );

        if (
            rows.length === 0
        ) {

            return res.status(401).json({
                ok: false,
                mensaje:
                "Usuario no encontrado"
            });
        }

        const usuario =
        rows[0];

        if (
            usuario.password !==
            password
        ) {

            return res.status(401).json({
                ok: false,
                mensaje:
                "Contraseña incorrecta"
            });
        }

        return res.json({
            ok: true,
            usuario: {
                id:
                usuario.id_usuario,

                nombre:
                usuario.nombre_completo,

                rol:
                usuario.rol
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            ok: false,
            mensaje:
            "Error interno"
        });
    }
};