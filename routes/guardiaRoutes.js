const express =
require("express");

const router =
express.Router();

const guardiaController =
require(
"../controllers/guardiaController"
);

const {
    verificarSesion,
    soloGuardia
} = require(
"../middlewares/authMiddleware"
);

router.get(
    "/hoy",
    guardiaController.listarHoy
);

router.post(
    "/ingreso",
    guardiaController.registrarIngreso
);

module.exports = router;