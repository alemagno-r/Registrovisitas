const db = require("../config/db");

const obtenerTodos = async () => {

    const [rows] = await db.execute(`
        SELECT
            e.id_evento,
            e.descripcion,
            e.fecha,
            e.hora_inicio,
            e.hora_fin,
            e.lugar,

            ua.nombre AS unidad,

            u.nombre_completo AS anfitrion_principal,

            GROUP_CONCAT(
                DISTINCT us.nombre_completo
                SEPARATOR ', '
            ) AS anfitriones_secundarios

        FROM evento e

        INNER JOIN unidad_administrativa ua
            ON e.id_unidad = ua.id_unidad

        INNER JOIN usuario u
            ON e.anfitrion_principal = u.id_usuario

        LEFT JOIN evento_anfitrion ea
            ON e.id_evento = ea.id_evento

        LEFT JOIN usuario us
            ON ea.id_usuario = us.id_usuario

        GROUP BY e.id_evento

        ORDER BY e.fecha DESC
    `);

    return rows;
};
const obtenerPorId = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM evento
        WHERE id_evento = ?
        `,
        [id]
    );

    return rows[0];

};
const crear = async (
    descripcion,
    fecha,
    horaInicio,
    horaFin,
    lugar,
    idUnidad,
    anfitrionPrincipal
) => {

    const [result] = await db.execute(
        `
        INSERT INTO evento(
            descripcion,
            fecha,
            hora_inicio,
            hora_fin,
            lugar,
            id_unidad,
            anfitrion_principal
        )
        VALUES(?,?,?,?,?,?,?)
        `,
        [
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar,
            idUnidad,
            anfitrionPrincipal
        ]
    );

    return result;
};

const agregarAnfitrion = async (
    idEvento,
    idUsuario
) => {

    await db.execute(
        `
        INSERT INTO evento_anfitrion(
            id_evento,
            id_usuario
        )
        VALUES(?,?)
        `,
        [
            idEvento,
            idUsuario
        ]
    );

};

const actualizar = async (
    id,
    descripcion,
    fecha,
    horaInicio,
    horaFin,
    lugar
) => {

    await db.execute(
        `
        UPDATE evento
        SET
            descripcion = ?,
            fecha = ?,
            hora_inicio = ?,
            hora_fin = ?,
            lugar = ?
        WHERE id_evento = ?
        `,
        [
            descripcion,
            fecha,
            horaInicio,
            horaFin,
            lugar,
            id
        ]
    );

};

const eliminar = async (id) => {

    await db.execute(
        `
        DELETE FROM ingreso_visitante
        WHERE id_invitacion IN (
            SELECT id_invitacion
            FROM invitacion
            WHERE id_evento = ?
        )
        `,
        [id]
    );

    await db.execute(
        `
        DELETE FROM invitacion
        WHERE id_evento = ?
        `,
        [id]
    );

    await db.execute(
        `
        DELETE FROM evento_anfitrion
        WHERE id_evento = ?
        `,
        [id]
    );

    await db.execute(
        `
        DELETE FROM evento
        WHERE id_evento = ?
        `,
        [id]
    );

};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    agregarAnfitrion,
    actualizar,
    eliminar
};