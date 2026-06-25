const db = require("../config/db");

const resumenHoy = async () => {

    const [rows] = await db.execute(`
        SELECT

            COUNT(i.id_invitacion) AS invitados,

            SUM(
                CASE
                    WHEN iv.id_ingreso IS NOT NULL
                    THEN 1
                    ELSE 0
                END
            ) AS asistieron,

            SUM(
                CASE
                    WHEN iv.id_ingreso IS NULL
                    THEN 1
                    ELSE 0
                END
            ) AS ausentes

        FROM invitacion i

        INNER JOIN evento e
            ON i.id_evento = e.id_evento

        LEFT JOIN ingreso_visitante iv
            ON i.id_invitacion = iv.id_invitacion

        WHERE e.fecha = CURDATE()
    `);

    return rows[0];
};
const detalleAsistencia = async () => {

    const [rows] = await db.execute(`
        SELECT

            e.descripcion AS evento,

            v.nombre_completo,

            COALESCE(
                v.rut,
                v.pasaporte
            ) AS documento,

            CASE
                WHEN iv.id_ingreso IS NOT NULL
                THEN 'ASISTIÓ'
                ELSE 'AUSENTE'
            END estado

        FROM invitacion i

        INNER JOIN visitante v
            ON i.id_visitante =
               v.id_visitante

        INNER JOIN evento e
            ON i.id_evento =
               e.id_evento

        LEFT JOIN ingreso_visitante iv
            ON i.id_invitacion =
               iv.id_invitacion

        ORDER BY
            e.descripcion,
            v.nombre_completo
    `);

    return rows;

};
const reporteEventos = async () => {

    const [rows] = await db.execute(`
        SELECT

            e.descripcion,

            COUNT(i.id_invitacion) AS invitados,

            SUM(
                CASE
                    WHEN i.id_invitacion IS NOT NULL
                    AND iv.id_ingreso IS NOT NULL
                    THEN 1
                    ELSE 0
                END
            ) AS asistieron,

            SUM(
                CASE
                    WHEN i.id_invitacion IS NOT NULL
                    AND iv.id_ingreso IS NULL
                    THEN 1
                    ELSE 0
                END
            ) AS ausentes

        FROM evento e

        LEFT JOIN invitacion i
            ON e.id_evento = i.id_evento

        LEFT JOIN ingreso_visitante iv
            ON i.id_invitacion = iv.id_invitacion

        GROUP BY
            e.id_evento,
            e.descripcion

        ORDER BY
            e.fecha DESC
    `);

    return rows;
};

module.exports = {
    resumenHoy,
    reporteEventos,
    detalleAsistencia
};