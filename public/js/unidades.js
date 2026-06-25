const tabla =
document.getElementById(
"tablaUnidades"
);

async function cargar(){

    const respuesta =
    await fetch(
        "/api/unidades"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML = "";

    datos.forEach(
    unidad=>{

        tabla.innerHTML += `
        <tr>
            <td>
                ${unidad.id_unidad}
            </td>

            <td>
                ${unidad.nombre}
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

    const nombre =
    document
    .getElementById(
    "nombreUnidad"
    ).value;

    await fetch(
    "/api/unidades",
    {
        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({
            nombre
        })
    });

    document
    .getElementById(
    "nombreUnidad"
    ).value="";

    cargar();

});

cargar();