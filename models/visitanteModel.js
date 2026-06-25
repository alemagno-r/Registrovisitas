const db = require("../config/db");

const obtenerTodos = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM visitante
        ORDER BY nombre_completo
    `);

    return rows;
};

const crear = async (
    nombre,
    tipoDocumento,
    rut,
    pasaporte,
    correo,
    telefono
) => {

    const [result] = await db.execute(
        `
        INSERT INTO visitante(
            tipo_documento,
            rut,
            pasaporte,
            nombre_completo,
            correo,
            telefono
        )
        VALUES(?,?,?,?,?,?)
        `,
        [
            tipoDocumento,
            rut,
            pasaporte,
            nombre,
            correo,
            telefono
        ]
    );

    return result;
};
module.exports = {
    obtenerTodos,
    crear
};