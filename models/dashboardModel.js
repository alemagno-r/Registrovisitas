const db = require("../config/db");

const obtenerResumen = async () => {

    const [[unidades]] =
    await db.execute(`
        SELECT COUNT(*) total
        FROM unidad_administrativa
    `);

    const [[usuarios]] =
    await db.execute(`
        SELECT COUNT(*) total
        FROM usuario
        WHERE activo = 1
    `);

    const [[eventos]] =
    await db.execute(`
        SELECT COUNT(*) total
        FROM evento
    `);

    return {
        unidades: unidades.total,
        usuarios: usuarios.total,
        eventos: eventos.total
    };
};

module.exports = {
    obtenerResumen
};