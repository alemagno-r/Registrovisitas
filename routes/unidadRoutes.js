const express = require("express");

const router = express.Router();

const unidadController =
require("../controllers/unidadController");

const {
    verificarSesion,
    soloAdmin
} = require(
    "../middlewares/authMiddleware"
);

router.get(
    "/",

    soloAdmin,
    unidadController.listar
);

router.get(
    "/combo",
    unidadController.combo
);

router.post(
    "/",
   
    soloAdmin,
    unidadController.crear
);

module.exports = router;