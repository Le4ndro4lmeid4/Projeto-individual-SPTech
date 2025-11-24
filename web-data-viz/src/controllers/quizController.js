// quizController.js
var quizModel = require("../models/quizModel");

function registrar(req, res) {
    var elemento = req.body.elementoServer;
    var idUsuario = req.body.idUsuarioServer;
    var respostas = req.body.respostasServer;

    if (!elemento || !idUsuario) {
        res.status(400).send("elementoServer e idUsuarioServer são obrigatórios!");
        return;
    }

    idUsuario = Number(idUsuario);

    quizModel.verificarSeJaFezQuiz(idUsuario)
        .then(function (resultadoVerificacao) {
            if (resultadoVerificacao.length > 0) {
                console.log("Usuário já fez o quiz. Bloqueando novo registro.");
                res.status(409).send("Usuário já respondeu este quiz.");
                return;
            }

            return quizModel.registrarResultadoQuiz(idUsuario, elemento);
        })
        .then(function (resultadoInsert) {
            if (!resultadoInsert) {
                return;
            }

            return quizModel.buscarQuizPorUsuario(idUsuario);
        })
        .then(function (resultadoQuizUsuario) {
            if (!resultadoQuizUsuario) {
                return;
            }

            var registro = resultadoQuizUsuario[0];
            var idUsuarioQuiz = registro.idUsuarioQuiz;

            console.log("idUsuarioQuiz encontrado:", idUsuarioQuiz);

            if (respostas && respostas.length > 0) {
                return quizModel.registrarRespostasUsuario(idUsuarioQuiz, respostas)
                    .then(function () {
                        res.status(201).json({
                            mensagem: "Quiz e respostas salvos com sucesso!",
                            elemento: registro.elemento,
                            idUsuarioQuiz: idUsuarioQuiz
                        });
                    });
            } else {
                res.status(201).json({
                    mensagem: "Quiz salvo com sucesso!",
                    elemento: registro.elemento,
                    idUsuarioQuiz: idUsuarioQuiz
                });
            }
        })
        .catch(function (erro) {
            console.log("Erro no registrar quiz:", erro);
            res.status(500).json(erro);
        });
}

function dashboard(req, res) {
    quizModel.buscarDashboard()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao buscar dashboard:", erro);
            res.status(500).json(erro);
        });
}

function meuElemento(req, res) {
    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        res.status(400).send("idUsuario é obrigatório.");
        return;
    }

    idUsuario = Number(idUsuario);

    quizModel.buscarQuizPorUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum quiz encontrado para esse usuário.");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao buscar elemento do usuário:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    registrar,
    dashboard,
    meuElemento
};
