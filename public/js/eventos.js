let idEditando = null;
const tabla =
document.getElementById(
"tablaEventos"
);
const listaAnfitriones =
document.getElementById(
"listaAnfitriones"
);

async function cargarUnidades(){

    const respuesta =
    await fetch(
    "/api/unidades/combo"
    );

    const datos =
    await respuesta.json();

    const combo =
    document.getElementById(
    "unidad"
    );

    combo.innerHTML="";

    datos.forEach(u=>{

        combo.innerHTML += `
        <option value="${u.id_unidad}">
            ${u.nombre}
        </option>
        `;

    });

}

async function cargarUsuarios(){

    const respuesta =
    await fetch(
    "/api/usuarios/combo"
    );

    const datos =
    await respuesta.json();

    const combo =
    document.getElementById(
    "anfitrion"
    );

    combo.innerHTML="";

    listaAnfitriones.innerHTML="";

    datos.forEach(u=>{

        combo.innerHTML += `
        <option value="${u.id_usuario}">
            ${u.nombre_completo}
        </option>
        `;

        listaAnfitriones.innerHTML += `
        <div>

            <input
                type="checkbox"
                class="anfitrionCheck"
                value="${u.id_usuario}">

            ${u.nombre_completo}

        </div>
        `;

    });

}

async function cargarEventos(){

    const respuesta =
    await fetch(
    "/api/eventos"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML="";

    datos.forEach(e=>{

   const fecha =
new Date(e.fecha)
.toLocaleDateString("es-CL");

tabla.innerHTML += `
<tr>

<td>${e.id_evento}</td>

<td>${e.descripcion}</td>

<td>${fecha}</td>

<td>${e.hora_inicio}</td>

<td>${e.hora_fin}</td>

<td>${e.unidad}</td>

<td>${e.anfitrion_principal}</td>

<td>
${e.anfitriones_secundarios || "-"}
</td>

<td>

<button
class="btn btn-warning btn-sm"
onclick="editar(${e.id_evento})">

Editar

</button>

<button
class="btn btn-danger btn-sm"
onclick="eliminar(${e.id_evento})">

Eliminar

</button>

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

    const anfitriones = [];

    document
    .querySelectorAll(
    ".anfitrionCheck:checked"
    )
    .forEach(c=>{

        anfitriones.push(
            c.value
        );

    });

    const url =
    idEditando
    ? `/api/eventos/${idEditando}`
    : "/api/eventos";

    const metodo =
    idEditando
    ? "PUT"
    : "POST";

    const respuesta =
    await fetch(
        url,
        {
            method: metodo,

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({

                descripcion:
                descripcion.value,

                fecha:
                fecha.value,

                horaInicio:
                horaInicio.value,

                horaFin:
                horaFin.value,

                lugar:
                lugar.value,

                idUnidad:
                unidad.value,

                anfitrionPrincipal:
                anfitrion.value,

                anfitriones

            })

        }
    );

    const datos =
    await respuesta.json();

    alert(
        datos.mensaje
    );

    idEditando = null;

    document.getElementById(
        "btnGuardar"
    ).textContent =
    "Guardar Evento";

    descripcion.value = "";
    fecha.value = "";
    horaInicio.value = "";
    horaFin.value = "";
    lugar.value = "";

    cargarEventos();

});

cargarUnidades();
cargarUsuarios();
cargarEventos();
async function editar(idEvento){

    const respuesta =
    await fetch(
        `/api/eventos/${idEvento}`
    );

    const evento =
    await respuesta.json();

    descripcion.value =
    evento.descripcion;

    fecha.value =
    evento.fecha
    .split("T")[0];

    horaInicio.value =
    evento.hora_inicio;

    horaFin.value =
    evento.hora_fin;

    lugar.value =
    evento.lugar;

    unidad.value =
    evento.id_unidad;

    anfitrion.value =
    evento.anfitrion_principal;

    idEditando =
    idEvento;

    document.getElementById(
        "btnGuardar"
    ).textContent =
    "Actualizar Evento";

}

async function eliminar(idEvento){

    const confirmar =
    confirm(
        "¿Desea eliminar este evento?"
    );

    if(!confirmar){

        return;

    }

    const respuesta =
    await fetch(
        `/api/eventos/${idEvento}`,
        {
            method:"DELETE"
        }
    );

    const datos =
    await respuesta.json();

    alert(
        datos.mensaje
    );

    cargarEventos();
    

}