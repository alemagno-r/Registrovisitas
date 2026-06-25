const usuarioMenu =
JSON.parse(
    localStorage.getItem("usuario")
);

if(!usuarioMenu){

    window.location.href =
    "login.html";

}

if(usuarioMenu.rol === "USUARIO"){

    document.getElementById("menuDashboard")?.remove();
    document.getElementById("menuGuardia")?.remove();
    document.getElementById("menuUsuarios")?.remove();
    document.getElementById("menuUnidades")?.remove();

}

if(usuarioMenu.rol === "GUARDIA"){

    document.getElementById("menuDashboard")?.remove();
    document.getElementById("menuEventos")?.remove();
    document.getElementById("menuVisitantes")?.remove();
    document.getElementById("menuInvitaciones")?.remove();
    document.getElementById("menuUsuarios")?.remove();
    document.getElementById("menuUnidades")?.remove();
    document.getElementById("menuReportes")?.remove();

}

function cerrarSesion(){

    localStorage.removeItem(
        "usuario"
    );

    window.location.href =
    "login.html";

}