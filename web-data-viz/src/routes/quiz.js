var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrar(req, res);
});

router.get("/dashboard", function (req, res) {
    quizController.dashboard(req, res); 
});

router.get("/meuElemento/:idUsuario", function (req, res) {
    quizController.meuElemento(req, res);
});

module.exports = router;
