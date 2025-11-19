var database = require("../database/config");

const ID_QUIZ_ELEMENTOS = 1;

function verificarSeJaFezQuiz(fkUsuario) {
    console.log("quizModel -> verificarSeJaFezQuiz()", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT idUsuarioQuiz, resultadoElemento, dtRealizacao
        FROM usuarioQuiz
        WHERE fkUsuario = ${fkUsuario}
          AND fkQuiz = ${ID_QUIZ_ELEMENTOS};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarResultadoQuiz(fkUsuario, resultadoElemento) {
    console.log("quizModel -> registrarResultadoQuiz()", fkUsuario, resultadoElemento);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        INSERT INTO usuarioQuiz (fkUsuario, fkQuiz, resultadoElemento)
        VALUES (${fkUsuario}, ${ID_QUIZ_ELEMENTOS}, '${resultadoElemento}');
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDashboard() {
    console.log("quizModel -> buscarDashboard()");

    var instrucaoSql = `
        SELECT resultadoElemento AS elemento, COUNT(*) AS total
        FROM usuarioQuiz
        GROUP BY resultadoElemento;
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoPorUsuario(fkUsuario) {
    console.log("quizModel -> buscarUltimoPorUsuario()", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT resultadoElemento AS elemento, dtRealizacao AS data_registro
        FROM usuarioQuiz
        WHERE fkUsuario = ${fkUsuario}
          AND fkQuiz = ${ID_QUIZ_ELEMENTOS}
        ORDER BY dtRealizacao DESC
        LIMIT 1;
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarSeJaFezQuiz,
    registrarResultadoQuiz,
    buscarDashboard,
    buscarUltimoPorUsuario
};
