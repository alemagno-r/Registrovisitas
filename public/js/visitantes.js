const tabla =
document.getElementById(
"tablaVisitantes"
);

async function cargar(){

    const respuesta =
    await fetch(
    "/api/visitantes"
    );

    const datos =
    await respuesta.json();

    tabla.innerHTML="";

    datos.forEach(v=>{

        tabla.innerHTML += `
        <tr>

        <td>${v.id_visitante}</td>

        <td>${v.nombre_completo}</td>

        <td>${v.tipo_documento}</td>

        <td>${v.rut || v.pasaporte}</td>

        <td>${v.correo}</td>
        <td>${v.telefono}</td>
        
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
if(tipoDocumento.value === "RUT"){

    const rut =
    documento.value.trim();

    if(!rut.includes("-")){

        alert(
            "Formato RUT inválido. Ej: 12345678-9"
        );

        return;
    }

}
    await fetch(
    "/api/visitantes",
    {
        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({

            nombre:
            nombre.value,

            tipoDocumento:
            tipoDocumento.value,

            documento:
            documento.value,

            correo:
            correo.value,

            telefono:
            telefono.value,
        })
    });

    cargar();

});

cargar();