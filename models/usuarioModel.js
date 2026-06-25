const db = require("../config/db");

const obtenerPorCorreo = async (correo) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM usuario
        WHERE correo = ?
        AND activo = 1
        `,
        [correo]
    );

    return rows[0];
};

const obtenerTodos = async () => {

    const [rows] = await db.execute(`
        SELECT
            u.id_usuario,
            u.nombre_completo,
            u.correo,
            u.rol,
            ua.nombre AS unidad,
            u.activo
        FROM usuario u
        LEFT JOIN unidad_administrativa ua
            ON u.id_unidad = ua.id_unidad
        ORDER BY u.nombre_completo
    `);

    return rows;
};

const crear = async (
    nombre,
    correo,
    password,
    rol,
    idUnidad
) => {

    const [result] = await db.execute(
        `
        INSERT INTO usuario(
            nombre_completo,
            correo,
            password,
            rol,
            id_unidad
        )
        VALUES(?,?,?,?,?)
        `,
        [
            nombre,
            correo,
            password,
            rol,
            idUnidad
        ]
    );

    return result;
};

module.exports = {
    obtenerTodos,
    crear,
    obtenerPorCorreo
};