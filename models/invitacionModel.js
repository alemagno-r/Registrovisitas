const db = require("../config/db");

const obtenerTodas = async () => {

    const [rows] = await db.execute(`
        SELECT
            i.id_invitacion,
            e.descripcion AS evento,
            v.nombre_completo AS visitante,
            i.fecha_invitacion
        FROM invitacion i
        INNER JOIN evento e
            ON i.id_evento = e.id_evento
        INNER JOIN visitante v
            ON i.id_visitante = v.id_visitante
        ORDER BY i.fecha_invitacion DESC
    `);

    return rows;
};

const crear = async (
    idEvento,
    idVisitante
) => {

    await db.execute(
        `
        INSERT INTO invitacion(
            id_evento,
            id_visitante
        )
        VALUES(?,?)
        `,
        [
            idEvento,
            idVisitante
        ]
    );

};

module.exports = {
    obtenerTodas,
    crear
};