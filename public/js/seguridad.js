const usuario =
JSON.parse(
localStorage.getItem("usuario")
);

if(!usuario){

    window.location.href =
    "login.html";

}

const pagina =
window.location.pathname
.split("/")
.pop();

switch(usuario.rol){

    case "ADMINISTRADOR":

        // acceso total

        break;

    case "USUARIO":

        const paginasPermitidasUsuario = [

            "eventos.html",
            "visitantes.html",
            "invitaciones.html",
            "reportes.html"

        ];

        if(
            !paginasPermitidasUsuario.includes(
                pagina
            )
        ){

            window.location.href =
            "eventos.html";

        }

        break;

    case "GUARDIA":

        if(
            pagina !==
            "guardia.html"
        ){

            window.location.href =
            "guardia.html";

        }

        break;

    default:

        localStorage.removeItem(
            "usuario"
        );

        window.location.href =
        "login.html";

}