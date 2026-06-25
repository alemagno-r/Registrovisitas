const tabla =
document.getElementById(
"tablaGuardia"
);

async function cargar(){

    const respuesta =
    await fetch(
    "/api/guardia/hoy"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML = "";

   datos.forEach(v => {

    tabla.innerHTML += `
    <tr>

        <td>
            ${v.evento}
        </td>

        <td>
            ${v.nombre_completo}
        </td>

        <td>
            ${v.rut || v.pasaporte}
        </td>

        <td>
            ${v.estado}
        </td>

        <td>

            ${
                v.estado === "INGRESÓ"
                ?
                `
                <button
                class="btn btn-secondary"
                disabled>

                Registrado

                </button>
                `
                :
                `
                <button
                class="btn btn-success"
                onclick="registrar(${v.id_invitacion})">

                Registrar

                </button>
                `
            }

        </td>

    </tr>
    `;

});
}

async function registrar(idInvitacion){

    const respuesta = await fetch(
        "/api/guardia/ingreso",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                idInvitacion
            })
        }
    );

    const datos = await respuesta.json();

    alert(datos.mensaje);

    cargar();
}
cargar();