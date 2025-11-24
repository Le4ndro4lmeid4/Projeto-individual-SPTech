// SESSÃO
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        if (b_usuario) {
            b_usuario.innerHTML = nome;
        }
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "flex";
    }
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "none";
    }

    var divErrosLogin = document.getElementById("div_erros_login");
    if (divErrosLogin && texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function preencherNomeUsuarioSidebar() {
    
    var nomeUsuario = sessionStorage.NOME_USUARIO;
    if (nomeUsuario && nomeUsuario !== "undefined") {
        document.getElementById("nomeUsuario").textContent = nomeUsuario;
    }
    
}

function aplicarCorSidebarPeloElemento() {
    var elemento = sessionStorage.ELEMENTO;
    var sidebar = document.getElementById("sidebar");

    if (!sidebar) return;

    if (elemento === "ar") {
        sidebar.style.background = "linear-gradient(to bottom, #639aab, #417288)";
    } else if (elemento === "agua") {
        sidebar.style.background = "linear-gradient(to bottom, #1b2d6a, #0f1b3d)";
    } else if (elemento === "fogo") {
        sidebar.style.background = "linear-gradient(to bottom, #8a211a, #590f0e)";
    } else if (elemento === "terra") {
        sidebar.style.background = "linear-gradient(to bottom, #35702a, #1f3f18)";
    }
}