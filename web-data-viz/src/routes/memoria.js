var express = require("express");
var router = express.Router();

var memoriaController = require("../controllers/memoriaController");

router.post("/registrar", function (req, res) {
    memoriaController.registrarPartida(req, res);
});

router.get("/dashboardGeral", function (req, res) {
    memoriaController.dashboardGeral(req, res);
});

router.get("/minhasPartidas/:idUsuario", function (req, res) {
    memoriaController.minhasPartidas(req, res);
});

router.get("/resumoUsuario/:idUsuario", function (req, res) {
    memoriaController.resumoUsuario(req, res);
});


module.exports = router;

