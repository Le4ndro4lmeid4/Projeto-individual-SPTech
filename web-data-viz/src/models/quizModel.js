// quizModel.js
var database = require("../database/config");

const ID_QUIZ_ELEMENTOS = 1;

function verificarSeJaFezQuiz(fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarSeJaFezQuiz():", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT idUsuarioQuiz, resultadoElemento, dtRealizacao
        FROM usuarioQuiz
        WHERE fkUsuario = ${fkUsuario}
          AND fkQuiz = ${ID_QUIZ_ELEMENTOS};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarResultadoQuiz(fkUsuario, resultadoElemento) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarResultadoQuiz():", fkUsuario, resultadoElemento);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        INSERT INTO usuarioQuiz (fkUsuario, fkQuiz, resultadoElemento)
        VALUES (${fkUsuario}, ${ID_QUIZ_ELEMENTOS}, '${resultadoElemento}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDashboard() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDashboard()");

    var instrucaoSql = `
        SELECT resultadoElemento AS elemento, COUNT(*) AS total
        FROM usuarioQuiz
        GROUP BY resultadoElemento;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuizPorUsuario(fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarQuizPorUsuario():", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT 
            idUsuarioQuiz,
            resultadoElemento AS elemento,
            dtRealizacao AS data_registro
        FROM usuarioQuiz
        WHERE fkUsuario = ${fkUsuario}
          AND fkQuiz = ${ID_QUIZ_ELEMENTOS}
        ORDER BY dtRealizacao DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarRespostasUsuario(idUsuarioQuiz, respostas) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarRespostasUsuario():", idUsuarioQuiz, respostas);

    var valores = [];

    for (var i = 0; i < respostas.length; i++) {
        var r = respostas[i];
        valores.push(`(${idUsuarioQuiz}, ${r.indicePergunta}, ${r.indiceOpcao})`);
    }

    if (valores.length === 0) {
        console.log("Nenhuma resposta para inserir.");
        return;
    }

    var instrucaoSql = `
        INSERT INTO respostaUsuario (fkUsuarioQuiz, indicePergunta, indiceOpcao)
        VALUES ${valores.join(", ")};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarSeJaFezQuiz,
    registrarResultadoQuiz,
    buscarDashboard,
    buscarQuizPorUsuario,
    registrarRespostasUsuario
};
