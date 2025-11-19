var quizModel = require("../models/quizModel");

// Registrar resultado do quiz
// Regra: se já fez o quiz, não deixa registrar de novo
function registrar(req, res) {
    var elemento = req.body.elementoServer;
    var idUsuario = req.body.idUsuarioServer;

    console.log("quizController -> registrar:", elemento, idUsuario);

    if (elemento == undefined) {
        res.status(400).send("O campo 'elemento' está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {
        // 1) Verifica se já fez
        quizModel.verificarSeJaFezQuiz(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    // Já tem registro desse quiz pra esse usuário
                    res.status(409).send("Você já respondeu este quiz. Não é permitido refazer.");
                } else {
                    // 2) Se não fez, registra
                    return quizModel.registrarResultadoQuiz(idUsuario, elemento)
                        .then(function (resInsert) {
                            res.json({
                                mensagem: "Resultado registrado com sucesso!",
                                resultado: resInsert
                            });
                        });
                }
            })
            .catch(function (erro) {
                console.log("Erro ao registrar quiz:", erro);
                res.status(500).json(erro.sqlMessage || erro);
            });
    }
}

// Dashboard geral (total por elemento)
function buscarDashboard(req, res) {
    quizModel.buscarDashboard()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar dashboard:", erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

// Buscar último elemento do usuário
function buscarUltimoPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("quizController -> buscarUltimoPorUsuario:", idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {
        quizModel.buscarUltimoPorUsuario(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao buscar último resultado:", erro);
                res.status(500).json(erro.sqlMessage || erro);
            });
    }
}

module.exports = {
    registrar,
    buscarDashboard,
    buscarUltimoPorUsuario
};
