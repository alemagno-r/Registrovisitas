require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();

const usuarioRoutes =
require("./routes/usuarioRoutes");

const unidadRoutes =
require("./routes/unidadRoutes");

const eventoRoutes =
require("./routes/eventoRoutes");

const visitanteRoutes =
require("./routes/visitanteRoutes");

const invitacionRoutes =
require("./routes/invitacionRoutes");

const guardiaRoutes =
require("./routes/guardiaRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const reporteRoutes =
require("./routes/reporteRoutes");

const authRoutes =
require("./routes/authRoutes");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

// SESSION PRIMERO
app.use(
    session({
        secret:"registro_visitas_2026",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:
            8 * 60 * 60 * 1000
        }
    })
);

// ARCHIVOS PUBLICOS
app.use(
    express.static("public")
);

// RUTAS
app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/dashboard",
    dashboardRoutes
);

app.use(
    "/api/usuarios",
    usuarioRoutes
);

app.use(
    "/api/unidades",
    unidadRoutes
);

app.use(
    "/api/eventos",
    eventoRoutes
);

app.use(
    "/api/visitantes",
    visitanteRoutes
);

app.use(
    "/api/invitaciones",
    invitacionRoutes
);

app.use(
    "/api/guardia",
    guardiaRoutes
);

app.use(
    "/api/reportes",
    reporteRoutes
);

// MYSQL
const db =
require("./config/db");

db.execute("SELECT 1")
.then(()=>{

    console.log(
        "✅ MySQL conectado"
    );

})
.catch(error=>{

    console.error(error);

});

// SERVIDOR
const PORT =
process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(
        `🚀 Servidor iniciado en puerto ${PORT}`
    );

});