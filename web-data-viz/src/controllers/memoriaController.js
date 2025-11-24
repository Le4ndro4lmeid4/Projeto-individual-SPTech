var memoriaModel = require("../models/memoriaModel");

function registrarPartida(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkJogo = req.body.fkJogoServer;
    var pontuacao = req.body.pontuacaoServer;
    var tempoSegundos = req.body.tempoSegundosServer;

    if (!fkUsuario || !fkJogo || pontuacao == null || tempoSegundos == null) {
        res.status(400).send("Parâmetros faltando para registrar partida.");
        return;
    }

    memoriaModel.registrarPartida(fkUsuario, fkJogo, pontuacao, tempoSegundos)
        .then(function (resultado) {
            res.status(201).json({
                mensagem: "Partida registrada com sucesso!",
                resultado: resultado
            });
        })
        .catch(function (erro) {
            console.log("Erro ao registrar partida de memória:", erro);
            res.status(500).json(erro);
        });
}

function dashboardGeral(req, res) {
    memoriaModel.buscarResumoGeral()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(204).send();
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar resumo geral:", erro);
            res.status(500).json(erro);
        });
}

function minhasPartidas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        res.status(400).send("idUsuario é obrigatório.");
        return;
    }

    memoriaModel.buscarPartidasPorUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma partida encontrada");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao buscar últimas partidas:", erro);
            res.status(500).json(erro);
        });
}

function resumoUsuario(req, res) {
    const idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        res.status(400).send("idUsuario é obrigatório.");
        return;
    }

    memoriaModel.buscarResumoPorUsuario(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]); 
            } else {
                res.status(204).send();
            }
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    registrarPartida,
    dashboardGeral,
    minhasPartidas,
    resumoUsuario
};
