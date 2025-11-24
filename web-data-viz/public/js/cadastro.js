function cadastrar() {
  var nomeVar = nome_input.value;
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;
  var confirmacaoSenhaVar = confirmacao_senha_input.value;

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para todos os campos em branco)";
    return false;
  }

  if (senhaVar !== confirmacaoSenhaVar) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML = "As senhas não coincidem.";
    return false;
  }

  setInterval(sumirMensagem, 5000);

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
    body: JSON.stringify({
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login.html";
        }, 2000);

        limparFormulario();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}

function limparFormulario() {
  nome_input.value = "";
  email_input.value = "";
  senha_input.value = "";
  confirmacao_senha_input.value = "";
}
