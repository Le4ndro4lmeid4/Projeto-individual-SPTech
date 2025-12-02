var listaDeQuestoes = [
  {
    pergunta: "Em um fim de semana perfeito, você estaria...",
    alternativaA: {
      texto: "Na praia, ouvindo o som das ondas.",
      elemento: "agua",
    },
    alternativaB: { texto: "Em uma festa cheia de energia.", elemento: "fogo" },
    alternativaC: {
      texto: "Fazendo trilha ou no meio da natureza.",
      elemento: "terra",
    },
    alternativaD: {
      texto: "Explorando lugares novos sem roteiro fixo.",
      elemento: "ar",
    },
  },
  {
    pergunta: "Quando surge um problema inesperado, você...",
    alternativaA: {
      texto: "Procura acalmar todos e entender a situação.",
      elemento: "agua",
    },
    alternativaB: {
      texto: "Assume a liderança e toma decisões rápidas.",
      elemento: "fogo",
    },
    alternativaC: {
      texto: "Analisa com calma e pensa em soluções práticas.",
      elemento: "terra",
    },
    alternativaD: {
      texto: "Se adapta e muda o plano sem estresse.",
      elemento: "ar",
    },
  },
  {
    pergunta: "Qual dessas palavras mais combina com você?",
    alternativaA: { texto: "Empatia", elemento: "agua" },
    alternativaB: { texto: "Intensidade", elemento: "fogo" },
    alternativaC: { texto: "Estabilidade", elemento: "terra" },
    alternativaD: { texto: "Liberdade", elemento: "ar" },
  },
  {
    pergunta: "Em um grupo de amigos, você é quem...",
    alternativaA: { texto: "Ouve e acolhe todo mundo.", elemento: "agua" },
    alternativaB: {
      texto: "Anima o rolê e puxa as ideias mais ousadas.",
      elemento: "fogo",
    },
    alternativaC: {
      texto: "Organiza tudo e garante que nada saia do controle.",
      elemento: "terra",
    },
    alternativaD: {
      texto: "Vai de grupo em grupo, conversando com vários.",
      elemento: "ar",
    },
  },
];

var numeroDaQuestaoAtual = 0;
var quantidadeDeQuestoes = listaDeQuestoes.length;
var elementos = ["agua", "fogo", "ar", "terra"];
var pontos = [0, 0, 0, 0];

var respostasUsuario = [];

function onloadEsconder() {
  document.getElementById("jogo").classList.add("oculto");
  document.getElementById("resultadoFinal").classList.add("oculto");
}

function iniciarQuiz() {
  document.getElementById("divInicio").classList.add("oculto");
  document.getElementById("jogo").classList.remove("oculto");

  document.getElementById("qtdQuestoes").innerText = quantidadeDeQuestoes;

  numeroDaQuestaoAtual = 0;
  resetarPontos();
  respostasUsuario = [];
  carregarQuestao(numeroDaQuestaoAtual);
}

function resetarPontos() {
  for (var i = 0; i < pontos.length; i++) {
    pontos[i] = 0;
  }
}

function carregarQuestao(indice) {
  var questao = listaDeQuestoes[indice];
  numeroDaQuestaoAtual = indice;

  document.getElementById("spanNumeroDaQuestaoAtual").innerText = indice + 1;
  document.getElementById("spanQuestaoExibida").innerText = questao.pergunta;

  document.getElementById("labelOpcaoUm").innerText =
    questao.alternativaA.texto;
  document.getElementById("labelOpcaoDois").innerText =
    questao.alternativaB.texto;
  document.getElementById("labelOpcaoTres").innerText =
    questao.alternativaC.texto;
  document.getElementById("labelOpcaoQuatro").innerText =
    questao.alternativaD.texto;

  desmarcarRadioButtons();

  var btnProx = document.getElementById("btnProx");
  btnProx.disabled = true;

  var options = document.getElementsByName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = function () {
      btnProx.disabled = false;
    };
  }
}

function desmarcarRadioButtons() {
  var options = document.getElementsByName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function avancar() {
  var options = document.getElementsByName("option");
  var selecionado = null;

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selecionado = options[i].value;
    }
  }

  if (!selecionado) {
    alert("Por favor, selecione uma alternativa.");
    return;
  }

  var indiceOpcao = 0;
  if (selecionado === "alternativaA") {
    indiceOpcao = 1;
  } else if (selecionado === "alternativaB") {
    indiceOpcao = 2;
  } else if (selecionado === "alternativaC") {
    indiceOpcao = 3;
  } else if (selecionado === "alternativaD") {
    indiceOpcao = 4;
  }

  respostasUsuario[numeroDaQuestaoAtual] = indiceOpcao;

  contabilizarResposta(selecionado);

  if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
    carregarQuestao(numeroDaQuestaoAtual + 1);
  } else {
    finalizarQuiz();
  }
}

function contabilizarResposta(valorAlternativa) {
  var questao = listaDeQuestoes[numeroDaQuestaoAtual];
  var alternativa = questao[valorAlternativa];
  var elemento = alternativa.elemento;

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i] === elemento) {
      pontos[i] = pontos[i] + 1;
    }
  }
}

function descobrirElementoFinal() {
  var maiorPontuacao = -1;
  var indiceMaior = -1;

  for (var i = 0; i < pontos.length; i++) {
    if (pontos[i] > maiorPontuacao) {
      maiorPontuacao = pontos[i];
      indiceMaior = i;
    }
  }

  if (indiceMaior === -1) {
    return null;
  }

  return elementos[indiceMaior];
}

function finalizarQuiz() {
  console.log("CHEGOU NA FINALIZARQUIZ");

  var elementoFinal = descobrirElementoFinal();

  var mensagem = "";
  if (elementoFinal === "agua") {
    mensagem =
      "Seu elemento é: ÁGUA.\nVocê é adaptável, empático(a) e costuma acolher as pessoas ao seu redor.";
  } else if (elementoFinal === "fogo") {
    mensagem =
      "Seu elemento é: FOGO.\nVocê é intenso(a), cheio(a) de energia e gosta de liderar e agir.";
  } else if (elementoFinal === "terra") {
    mensagem =
      "Seu elemento é: TERRA.\nVocê é estável, pé no chão e busca segurança e constância.";
  } else if (elementoFinal === "ar") {
    mensagem =
      "Seu elemento é: AR.\nVocê é curioso(a), livre e adora novas ideias e experiências.";
  } else {
    mensagem =
      "Não foi possível determinar seu elemento. Tente refazer o quiz.";
  }

  if (elementoFinal) {
    sessionStorage.ELEMENTO = elementoFinal;

    aplicarCorSidebarPeloElemento();
    aplicarCorQuizPeloElemento();
  }

  document.getElementById("jogo").classList.add("oculto");
  document.getElementById("resultadoFinal").classList.remove("oculto");
  document.getElementById("textoResultado").innerText = mensagem;

  document.getElementById("btnDashboard").classList.remove("oculto");

  registrarResultadoQuizNoServidor(elementoFinal);
}

function irParaDashboard() {
  window.location.href = "/dashboard/dashboard.html";
}

function registrarResultadoQuizNoServidor(elementoFinal) {
  console.log("Registrando resultado do quiz para elemento:", elementoFinal);

  var fkUsuario = sessionStorage.ID_USUARIO;
  console.log("ID_USUARIO no sessionStorage:", fkUsuario);

  if (!fkUsuario || fkUsuario === "undefined") {
    console.log("Usuário não identificado. Não será registrado no servidor.");
    return;
  }

  fkUsuario = Number(fkUsuario);
  if (isNaN(fkUsuario)) {
    console.log("ID_USUARIO inválido.");
    return;
  }

  var respostasParaServidor = [];
  for (var i = 0; i < respostasUsuario.length; i++) {
    respostasParaServidor.push({
      indicePergunta: i,
      indiceOpcao: respostasUsuario[i],
    });
  }

  fetch("/quiz/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      elementoServer: elementoFinal,
      idUsuarioServer: fkUsuario,
      respostasServer: respostasParaServidor,
    }),
  })
    .then(function (res) {
      console.log("Status da resposta ao registrar quiz:", res.status);

      if (res.status === 409) {
        console.log("Usuário já havia feito o quiz (status 409).");
      }

      if (!res.ok) {
        return;
      }

      return res.json().then(function (dados) {
        console.log("Dados retornados ao salvar quiz:", dados);
      });
    })
    .catch(function (erro) {
      console.log("Erro ao salvar resultado do quiz:", erro);
    });
}

function mostrarResultadoExistente(elemento) {
  document.getElementById("divInicio").classList.add("oculto");
  document.getElementById("jogo").classList.add("oculto");
  document.getElementById("resultadoFinal").classList.remove("oculto");

  var mensagem = "";

  if (elemento === "agua") {
    mensagem =
      "Seu elemento é: ÁGUA.\nVocê é adaptável, empático(a) e costuma acolher as pessoas ao seu redor.";
  } else if (elemento === "fogo") {
    mensagem =
      "Seu elemento é: FOGO.\nVocê é intenso(a), cheio(a) de energia e gosta de liderar e agir.";
  } else if (elemento === "terra") {
    mensagem =
      "Seu elemento é: TERRA.\nVocê é estável, pé no chão e busca segurança e constância.";
  } else if (elemento === "ar") {
    mensagem =
      "Seu elemento é: AR.\nVocê é curioso(a), livre e adora novas ideias e experiências.";
  } else {
    mensagem = "Não foi possível determinar seu elemento.";
  }

  document.getElementById("textoResultado").innerText = mensagem;
  document.getElementById("btnDashboard").classList.remove("oculto");
}

function verificarlogin() {
  var idUsuario = sessionStorage.ID_USUARIO;

  if (!idUsuario) {
    alert("Você precisa estar logado para fazer o quiz!");
    window.location.href = "/login.html";
    return;
  }

  fetch("/quiz/meuElemento/" + idUsuario)
    .then(function (res) {
      return res.json().then(function (dados) {
        if (dados && dados.length > 0) {
          var elemento = String(dados[0].elemento || "")
            .trim()
            .toLowerCase();

          sessionStorage.ELEMENTO = elemento;
          if (aplicarCorSidebarPeloElemento) {
            aplicarCorSidebarPeloElemento();
          }
          aplicarCorQuizPeloElemento()
          mostrarResultadoExistente(elemento);
        } else {
          onloadEsconder();
        }
      });
    })
    .catch(function (err) {
      console.log("Erro ao verificar elemento do usuário:", err);
      onloadEsconder();
    });
}

function aplicarCorQuizPeloElemento() {
  var elemento = sessionStorage.ELEMENTO;
  var container = document.getElementById("containerQuiz");
  if (!container) return;

  var cores = {
    ar: { fundo: "linear-gradient(to bottom, #639aab, #417288)" },
    agua: { fundo: "linear-gradient(to bottom, #1b2d6a, #0f1b3d)" },
    fogo: { fundo: "linear-gradient(to bottom, #8a211a, #590f0e)" },
    terra: { fundo: "linear-gradient(to bottom, #35702a, #1f3f18)" },
  };

  var tema = cores[elemento];
  if (tema) {
    container.style.background = tema.fundo;
  }
}

window.onload = function () {
  preencherNomeUsuarioSidebar();
  aplicarCorSidebarPeloElemento();
  verificarlogin();
  aplicarCorQuizPeloElemento();
};
