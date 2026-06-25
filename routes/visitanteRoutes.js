const express = require("express");

const router = express.Router();

const visitanteController =
require("../controllers/visitanteController");

router.get(
    "/",
    visitanteController.listar
);
router.get(
    "/combo",
    visitanteController.combo
);

router.post(
    "/",
    visitanteController.crear
);

module.exports = router;