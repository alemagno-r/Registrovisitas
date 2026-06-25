const tabla =
document.getElementById(
"tablaUsuarios"
);

const comboUnidad =
document.getElementById(
"unidad"
);

async function cargarUnidades(){

    const respuesta =
    await fetch(
    "/api/unidades/combo"
    );

    const datos =
    await respuesta.json();

    comboUnidad.innerHTML = "";

    datos.forEach(u=>{

        comboUnidad.innerHTML += `
        <option value="${u.id_unidad}">
            ${u.nombre}
        </option>
        `;

    });

}

async function cargarUsuarios(){

    const respuesta =
    await fetch(
    "/api/usuarios"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML = "";

    datos.forEach(u=>{

        tabla.innerHTML += `
        <tr>

        <td>
        ${u.id_usuario}
        </td>

        <td>
        ${u.nombre_completo}
        </td>

        <td>
        ${u.correo}
        </td>

        <td>
        ${u.rol}
        </td>

        <td>
        ${u.unidad}
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

    await fetch(
    "/api/usuarios",
    {
        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({

            nombre:
            document.getElementById(
            "nombre"
            ).value,

            correo:
            document.getElementById(
            "correo"
            ).value,

            password:
            document.getElementById(
            "password"
            ).value,

            rol:
            document.getElementById(
            "rol"
            ).value,

            idUnidad:
            document.getElementById(
            "unidad"
            ).value

        })
    });

    cargarUsuarios();

});

cargarUnidades();
cargarUsuarios();