const db = require("../config/db");

const obtenerTodas = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM unidad_administrativa
        ORDER BY nombre
    `);

    return rows;
};

const crear = async (nombre) => {

    const [result] = await db.execute(
        `
        INSERT INTO unidad_administrativa(nombre)
        VALUES(?)
        `,
        [nombre]
    );

    return result;
};

module.exports = {
    obtenerTodas,
    crear
};