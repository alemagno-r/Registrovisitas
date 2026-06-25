const express = require("express");

const router = express.Router();

const reporteController =
require("../controllers/reporteController");

const {
    verificarSesion,
    adminOUsuario
} = require(
    "../middlewares/authMiddleware"
);

router.get(
    "/resumen",
    reporteController.resumen
);

router.get(
    "/detalle",
    reporteController.detalle
);

router.get(
    "/eventos",
    reporteController.eventos
);

module.exports = router;