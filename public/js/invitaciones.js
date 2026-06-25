const tabla =
document.getElementById(
"tablaInvitaciones"
);

const listaVisitantes =
document.getElementById(
"listaVisitantes"
);

async function cargarEventos(){

    const respuesta =
    await fetch(
    "/api/eventos"
    );

    const datos =
    await respuesta.json();

    const combo =
    document.getElementById(
    "evento"
    );

    combo.innerHTML="";

    datos.forEach(e=>{

        combo.innerHTML += `
        <option value="${e.id_evento}">
            ${e.descripcion}
        </option>
        `;

    });

}

async function cargarVisitantes(){

    const respuesta =
    await fetch(
    "/api/visitantes/combo"
    );

    const datos =
    await respuesta.json();

    listaVisitantes.innerHTML="";

    datos.forEach(v=>{

        listaVisitantes.innerHTML += `
        <div>

            <input
            type="checkbox"
            class="visitanteCheck"
            value="${v.id_visitante}">

            ${v.nombre_completo}

        </div>
        `;

    });

}

async function cargarInvitaciones(){

    const respuesta =
    await fetch(
    "/api/invitaciones"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML="";

    datos.forEach(i=>{

        tabla.innerHTML += `
        <tr>

        <td>
        ${i.id_invitacion}
        </td>

        <td>
        ${i.evento}
        </td>

        <td>
        ${i.visitante}
        </td>

        </tr>
        `;

    });

}

document
.getElementById(
"btnGuardar"
)
.addEventListener(
"click",
async()=>{

    const visitantes = [];

    document
    .querySelectorAll(
    ".visitanteCheck:checked"
    )
    .forEach(c=>{

        visitantes.push(
            c.value
        );

    });

    await fetch(
    "/api/invitaciones",
    {
        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({

            idEvento:
            evento.value,

            visitantes

        })

    });

    cargarInvitaciones();

});

cargarEventos();
cargarVisitantes();
cargarInvitaciones();