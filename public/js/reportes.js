async function cargarResumen(){

    const respuesta =
    await fetch(
    "/api/reportes/resumen"
    );

    const datos =
    await respuesta.json();

    document
    .getElementById(
    "invitados"
    )
    .innerText =
    datos.invitados || 0;

    document
    .getElementById(
    "asistieron"
    )
    .innerText =
    datos.asistieron || 0;

    document
    .getElementById(
    "ausentes"
    )
    .innerText =
    datos.ausentes || 0;

}

async function cargarEventos(){

    const respuesta =
    await fetch(
    "/api/reportes/eventos"
    );

    const datos =
    await respuesta.json();

    const tabla =
    document.getElementById(
    "tablaEventos"
    );

    tabla.innerHTML="";

    datos.forEach(e=>{

        tabla.innerHTML += `
        <tr>

        <td>
        ${e.descripcion}
        </td>

        <td>
        ${e.invitados}
        </td>

        <td>
        ${e.asistieron}
        </td>

        <td>
        ${e.ausentes}
        </td>

        </tr>
        `;

    });

}
async function cargarDetalle(){

    const respuesta =
    await fetch(
    "/api/reportes/detalle"
    );

    const datos =
    await respuesta.json();

    const tabla =
    document.getElementById(
    "tablaDetalle"
    );

    if(!tabla){

        return;

    }

    tabla.innerHTML = "";

    datos.forEach(d=>{

        tabla.innerHTML += `
        <tr>

        <td>
        ${d.evento}
        </td>

        <td>
        ${d.nombre_completo}
        </td>

        <td>
        ${d.documento}
        </td>

        <td>
        ${d.estado}
        </td>

        </tr>
        `;

    });

}

cargarResumen();
cargarEventos();
cargarDetalle();