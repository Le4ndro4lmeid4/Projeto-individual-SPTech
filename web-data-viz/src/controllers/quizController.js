// quizController.js
var quizModel = require("../models/quizModel");

function registrar(req, res) {
  var elemento = req.body.elementoServer;
  var idUsuario = req.body.idUsuarioServer;
  var respostas = req.body.respostasServer;

  if (elemento == undefined) {
    res.status(400).send("elementoServer está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuarioServer está undefined!");
  } else {
    quizModel
      .verificarSeJaFezQuiz(idUsuario)
      .then(function (resultadoVerificacao) {
        console.log(
          `Resultados verificação quiz: ${resultadoVerificacao.length}`
        );

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
          return quizModel
            .registrarRespostasUsuario(idUsuarioQuiz, respostas)
            .then(function () {
              res.status(201).json({
                mensagem: "Quiz e respostas salvos com sucesso!",
                elemento: registro.elemento,
                idUsuarioQuiz: idUsuarioQuiz,
              });
            });
        } else {
          res.status(201).json({
            mensagem: "Quiz salvo com sucesso!",
            elemento: registro.elemento,
            idUsuarioQuiz: idUsuarioQuiz,
          });
        }
      })
      .catch(function (erro) {
        console.log("Erro no registrar quiz:", erro);
        res.status(500).json(erro.sqlMessage || erro);
      });
  }
}

function dashboard(req, res) {
  quizModel
    .buscarDashboard()
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log("Erro ao buscar dashboard:", erro);
      res.status(500).json(erro.sqlMessage || erro);
    });
}

function meuElemento(req, res) {
  var idUsuario = req.params.idUsuario;

  if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    quizModel
      .buscarQuizPorUsuario(idUsuario)
      .then(function (resultado) {
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        console.log("Erro ao buscar elemento do usuário:", erro);
        res.status(500).json(erro.sqlMessage || erro);
      });
  }
}

module.exports = {
  registrar,
  dashboard,
  meuElemento,
};
