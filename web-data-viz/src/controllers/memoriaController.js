var memoriaModel = require("../models/memoriaModel");

function registrarPartida(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var pontuacao = req.body.pontuacaoServer;
    var tempoSegundos = req.body.tempoSegundosServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuarioServer está undefined!");
    } else if (fkJogo == undefined) {
        res.status(400).send("fkJogoServer está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("pontuacaoServer está undefined!");
    } else if (tempoSegundos == undefined) {
        res.status(400).send("tempoSegundosServer está undefined!");
    } else {
        memoriaModel.registrarPartida(fkUsuario, fkJogo, pontuacao, tempoSegundos)
            .then(function (resultado) {
                res.status(201).json({
                    mensagem: "Partida registrada com sucesso!",
                    resultado: resultado
                });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao registrar a partida! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function dashboardGeral(req, res) {
    memoriaModel.buscarResumoGeral()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado para o resumo geral.");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar o resumo geral! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function minhasPartidas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        memoriaModel.buscarPartidasPorUsuario(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhuma partida encontrada");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as partidas do usuário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function resumoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        memoriaModel.buscarResumoPorUsuario(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resumo encontrado para esse usuário.");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar o resumo do usuário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    registrarPartida,
    dashboardGeral,
    minhasPartidas,
    resumoUsuario
};
