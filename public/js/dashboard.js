async function cargarDashboard(){

    try{

        const respuesta =
        await fetch(
        "/api/dashboard/resumen"
        );

        const datos =
        await respuesta.json();

        document.getElementById(
        "totalUnidades"
        ).innerText =
        datos.unidades;

        document.getElementById(
        "totalUsuarios"
        ).innerText =
        datos.usuarios;

        document.getElementById(
        "totalEventos"
        ).innerText =
        datos.eventos;

    }
    catch(error){

        console.log(error);

    }

}

cargarDashboard();