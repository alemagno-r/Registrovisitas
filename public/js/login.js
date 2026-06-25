document
.getElementById(
"loginForm"
)
.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const correo =
document.getElementById(
"correo"
).value;

const password =
document.getElementById(
"password"
).value;

const respuesta =
await fetch(
"/api/auth/login",
{
    method:"POST",

    headers:{
        "Content-Type":
        "application/json"
    },

    body:JSON.stringify({

        correo,
        password

    })
}

);

const datos =
await respuesta.json();

if(!datos.ok){

    alert(
    datos.mensaje
    );

    return;
}

localStorage.setItem(
"usuario",
JSON.stringify(
datos.usuario
)
);
if(datos.usuario.rol === "ADMINISTRADOR"){
    window.location.href = "dashboard.html";
}

if(datos.usuario.rol === "USUARIO"){
    window.location.href = "eventos.html";
}

if(datos.usuario.rol === "GUARDIA"){
    window.location.href = "guardia.html";
}

switch(
datos.usuario.rol
){

case "ADMINISTRADOR":

window.location =
"dashboard.html";

break;

case "USUARIO":

window.location =
"eventos.html";

break;

case "GUARDIA":

window.location =
"guardia.html";

break;

}

});