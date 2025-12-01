var graficoPizza = null;
var graficoMemoria = null;
var INTERVALO_ATUALIZACAO_MS = 5000;

// ---------- INICIALIZAÇÃO ----------

window.onload = function () {
  var idUsuario = sessionStorage.ID_USUARIO;
  var elementoSalvo = sessionStorage.ELEMENTO;

  if (elementoSalvo) {
    aplicarCorSidebarPeloElemento();
  }

  preencherNomeUsuarioSidebar();

  if (idUsuario) {
    carregarMeuElemento(idUsuario);
    carregarGraficoMemoria(idUsuario);
    mostrarResumoUsuario(idUsuario);
  }

  inicializarDashboard();
};


function inicializarDashboard() {
  carregarDashboard();

  setInterval(carregarDashboard, INTERVALO_ATUALIZACAO_MS);
}

function carregarDashboard() {
  fetch("/quiz/dashboard")
    .then(function (resposta) {
      if (!resposta.ok) {
        console.log("Erro ao buscar dados da dashboard. Status:", resposta.status);
        return;
      }

      return resposta.json();
    })
    .then(function (dados) {
      if (!dados || dados.length === 0) {
        document.getElementById("lista-resumo").innerHTML =
          "<p>Nenhum dado registrado ainda.</p>";
        return;
      }

      console.log("Dados recebidos da API:", dados);

      var totalGeral = dados.reduce(function (soma, linha) {
        return soma + linha.total;
      }, 0);

      atualizarMomentoUltimaAtualizacao();
      atualizarGraficoPizza(dados);
      montarResumoTexto(dados, totalGeral);
    })
    .catch(function (erro) {
      console.log("Erro ao carregar dashboard:", erro);
      document.getElementById("lista-resumo").innerHTML =
        "<p>Erro ao carregar os dados.</p>";
    });
}

function atualizarMomentoUltimaAtualizacao() {
  var agora = new Date();
  var horario = agora.toLocaleTimeString("pt-BR", { hour12: false });
  document.getElementById("ultima-atualizacao").textContent =
    "Última atualização: " + horario;
}

function atualizarGraficoPizza(dados) {
  var canvas = document.getElementById("graficoElementos");
  if (!canvas) {
    console.log("Canvas graficoElementos não encontrado.");
    return;
  }

  var ctx = canvas.getContext("2d");

  var labels = [];
  var valores = [];
  var cores = [];

  var mapaCores = {
    ar: "#639aab",
    agua: "#1b2d6a",
    fogo: "#8a211a",
    terra: "#35702a",
  };

  for (var i = 0; i < dados.length; i++) {
    var linha = dados[i];
    var elemento = String(linha.elemento || "").trim().toLowerCase();

    labels.push(elemento.toUpperCase());
    valores.push(linha.total);
    cores.push(mapaCores[elemento] || "#aaaaaa");
  }

  if (!graficoPizza) {
    graficoPizza = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Quantidade de pessoas",
            data: valores,
            backgroundColor: cores,
            borderColor: "#bfbcbcff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#f5f5f5",
            },
          },
          title: {
            display: true,
            text: "Distribuição por Elemento",
            color: "#f5f5f5",
          },
        },
      },
    });
  } else {
    graficoPizza.data.labels = labels;
    graficoPizza.data.datasets[0].data = valores;
    graficoPizza.data.datasets[0].backgroundColor = cores;
    graficoPizza.update();
  }
}

function montarResumoTexto(dados, totalGeral) {
  var container = document.getElementById("lista-resumo");
  container.innerHTML = "";

  var elementoUsuarioStorage = sessionStorage.ELEMENTO || "";
  var elementoUsuario = String(elementoUsuarioStorage).trim().toLowerCase();
  console.log("Elemento do usuário usado no resumo:", elementoUsuario);

  var porcentUsuario = 0;

  dados.forEach(function (linha) {
    var porcent = ((linha.total / totalGeral) * 100).toFixed(1);

    var elementoLinha = String(linha.elemento || "").trim().toLowerCase();
    console.log('Comparando "' + elementoLinha + '" com "' + elementoUsuario + '"');

    if (elementoLinha === elementoUsuario) {
      porcentUsuario = porcent;
    }
  });

  document.getElementById("spanPorcentagem").textContent =
    porcentUsuario + "%";
}

// ---------- ELEMENTO DO USUÁRIO ----------

function carregarMeuElemento(idUsuario) {
  console.log("ID_USUARIO no sessionStorage:", idUsuario);

  if (!idUsuario || idUsuario == "undefined") {
    document.getElementById("spanElementoUsuario").textContent =
      "usuário não identificado";
    return;
  }

  fetch("/quiz/meuElemento/" + idUsuario)
    .then(function (resposta) {
      if (!resposta.ok) {
        console.log(
          "Erro ao buscar elemento do usuário. Status:",
          resposta.status
        );
        document.getElementById("spanElementoUsuario").textContent =
          "erro ao carregar";
        return null;
      }

      return resposta.json();
    })
    .then(function (dados) {
      if (!dados || dados.length === 0) {
        document.getElementById("spanElementoUsuario").textContent =
          "nenhum quiz respondido ainda";
        return;
      }

      console.log("Dados do elemento do usuário:", dados);

      var elemento = String(dados[0].elemento || "").trim().toLowerCase();
      console.log("Elemento recebido:", elemento);

      document.getElementById("spanElementoUsuario").textContent =
        elemento.toUpperCase();

      sessionStorage.ELEMENTO = elemento;
      console.log("Elemento salvo no sessionStorage:", sessionStorage.ELEMENTO);
      aplicarCorSidebarPeloElemento();

      var cardPersonagem = document.getElementById("cardPersonagem");
      if (cardPersonagem) {
        if (elemento === "ar") {
          cardPersonagem.style.backgroundImage =
            'url("../assets/imgs/aang.jpg")';
        } else if (elemento === "agua") {
          cardPersonagem.style.backgroundImage =
            'url("../assets/imgs/katara.jpg")';
        } else if (elemento === "fogo") {
          cardPersonagem.style.backgroundImage =
            'url("../assets/imgs/zuko.jpg")';
        } else {
          cardPersonagem.style.backgroundImage =
            'url("../assets/imgs/toph.jpg")';
        }
      }

      var texto_card = document.getElementById("texto_card");
      if (texto_card) {
        if (elemento === "ar") {
          texto_card.style.background =
            "linear-gradient(to bottom, #639aab, #417288)";
        } else if (elemento === "agua") {
          texto_card.style.background =
            "linear-gradient(to bottom, #1b2d6a, #0f1b3d)";
        } else if (elemento === "fogo") {
          texto_card.style.background =
            "linear-gradient(to bottom, #8a211a, #590f0e)";
        } else {
          texto_card.style.background =
            "linear-gradient(to bottom, #35702a, #1f3f18)";
        }
      }
    })
    .catch(function (erro) {
      console.log("Erro ao carregar elemento do usuário:", erro);
      document.getElementById("spanElementoUsuario").textContent =
        "erro ao carregar";
    });
}

// ---------- MEMÓRIA (GRÁFICO E RESUMO) ----------

function carregarGraficoMemoria(idUsuario) {
  fetch("/memoria/minhasPartidas/" + idUsuario)
    .then(function (res) {
      if (res.status === 204) {
        console.log("Nenhuma partida encontrada para esse usuário.");
        return null;
      }
      if (!res.ok) {
        console.log("Erro ao buscar partidas de memória. Status:", res.status);
        return null;
      }

      return res.json();
    })
    .then(function (dados) {
      if (!dados || dados.length === 0) {
        return;
      }

      var labels = [];
      var jogadas = [];
      var tempos = [];
      dados.reverse();

      for (var i = 0; i < dados.length; i++) {
        var partida = dados[i];
        var label = "Partida " + (i + 1);

        labels.push(label);
        jogadas.push(partida.pontuacao);
        tempos.push(partida.tempoSegundos);
      }

      plotarGraficoMemoria(labels, jogadas, tempos);
    })
    .catch(function (erro) {
      console.log("Erro no fetch de partidas de memória:", erro);
    });
}

function plotarGraficoMemoria(labels, jogadas, tempos) {
  var ctx = document.getElementById("graficoMemoria");
  if (!ctx) {
    console.log("Canvas graficoMemoria não encontrado.");
    return;
  }

  if (!graficoMemoria) {
    graficoMemoria = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Jogadas",
            data: jogadas,
            borderWidth: 2,
            tension: 0.3,
          },
          {
            label: "Tempo (segundos)",
            data: tempos,
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Tempo / Jogadas",
            },
          },
          x: {
            title: {
              display: true,
              text: "Ultimas 5 Partidas",
            },
          },
        },
      },
    });
  } else {
    graficoMemoria.data.labels = labels;
    graficoMemoria.data.datasets[0].data = jogadas;
    graficoMemoria.data.datasets[1].data = tempos;
    graficoMemoria.update();
  }
}

function mostrarResumoUsuario(idUsuario) {
  fetch("/memoria/resumoUsuario/" + idUsuario)
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Erro ao buscar resumo do usuário");
      }

      return res.json();
    })
    .then(function (dados) {
      var textoCard = document.getElementById("texto_card2");

      if (!dados) {
        textoCard.textContent = "Nenhuma partida registrada ainda.";
        return;
      }

      var textoResumo =
        "Total de partidas: " + dados.total_partidas + "<br>" +
        "Média de jogadas: " + parseFloat(dados.media_jogadas).toFixed(2) + "<br>" +
        "Média de tempo: " + parseFloat(dados.media_tempo).toFixed(2) + "<br>" +
        "Melhor tempo: " + dados.melhor_tempo + "<br>" +
        "Pior tempo: " + dados.pior_tempo;

      textoCard.innerHTML = textoResumo;
    })
    .catch(function (erro) {
      console.log(erro);
      document.getElementById("texto_card2").textContent =
        "Erro ao carregar resumo.";
    });
}
