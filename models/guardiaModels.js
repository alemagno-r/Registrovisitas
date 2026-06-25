const db = require("../config/db");

const obtenerVisitasHoy = async () => {

    const [rows] = await db.execute(`
        SELECT

            i.id_invitacion,

            e.descripcion AS evento,

            v.nombre_completo,

            v.rut,

            v.pasaporte

        FROM invitacion i

        INNER JOIN evento e
            ON i.id_evento = e.id_evento

        INNER JOIN visitante v
            ON i.id_visitante = v.id_visitante

        WHERE e.fecha = CURDATE()

        ORDER BY
            e.descripcion,
            v.nombre_completo
    `);

    return rows;
};

const registrarIngreso = async (
    idInvitacion
) => {

    await db.execute(
        `
        INSERT INTO ingreso_visitante(
            id_invitacion
        )
        VALUES(?)
        `,
        [idInvitacion]
    );

};

module.exports = {
    obtenerVisitasHoy,
    registrarIngreso
};