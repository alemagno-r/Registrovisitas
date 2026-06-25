const express = require("express");

const router = express.Router();

const authController =
require("../controllers/authController");

console.log(authController);

router.post(
    "/login",
    authController.login
);
router.get(
    "/session",
    (req,res)=>{

        res.json({
            usuario:
            req.session.usuario || null
        });

    }
);

module.exports = router;