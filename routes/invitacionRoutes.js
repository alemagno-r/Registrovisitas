const express = require("express");

const router = express.Router();

const invitacionController =
require("../controllers/invitacionController");

router.get(
    "/",
    invitacionController.listar
);

router.post(
    "/",
    invitacionController.crear
);

module.exports = router;