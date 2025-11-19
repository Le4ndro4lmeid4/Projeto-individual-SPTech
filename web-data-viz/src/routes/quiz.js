var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrar(req, res);
});

router.get("/dashboard", function (req, res) {
    quizController.buscarDashboard(req, res);
});

router.get("/meuElemento/:idUsuario", function (req, res) {
    quizController.buscarUltimoPorUsuario(req, res);
});

module.exports = router;
