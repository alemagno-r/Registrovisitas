const express =
require("express");

const router =
express.Router();

const controller =
require(
"../controllers/usuarioController"
);

const {
    soloAdmin
} = require(
"../middlewares/authMiddleware"
);
router.get(
    "/combo",
    controller.combo
);
router.get(
    "/",
    soloAdmin,
    controller.listar
);

router.post(
    "/",
    soloAdmin,
    controller.crear
);


module.exports =
router;