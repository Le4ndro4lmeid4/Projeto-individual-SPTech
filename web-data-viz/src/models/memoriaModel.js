var database = require("../database/config");

function registrarPartida(fkUsuario, fkJogo, pontuacao, tempoSegundos) {
    console.log("memoriaModel -> registrarPartida()", fkUsuario, fkJogo, pontuacao, tempoSegundos);

    fkUsuario = Number(fkUsuario);
    fkJogo = Number(fkJogo);
    pontuacao = Number(pontuacao);
    tempoSegundos = Number(tempoSegundos);

    var instrucaoSql = `
        INSERT INTO partidaMemoria (fkUsuario, fkJogo, pontuacao, tempoSegundos)
        VALUES (${fkUsuario}, ${fkJogo}, ${pontuacao}, ${tempoSegundos});
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResumoPorUsuario(fkUsuario) {
    console.log("memoriaModel -> buscarResumoPorUsuario()", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT 
            COUNT(*)       AS total_partidas,
            AVG(pontuacao) AS media_jogadas,
            AVG(tempoSegundos) AS media_tempo,
            MIN(tempoSegundos) AS melhor_tempo,
            MAX(tempoSegundos) AS pior_tempo
        FROM partidaMemoria
        WHERE fkUsuario = ${fkUsuario};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPartidasPorUsuario(fkUsuario) {
    console.log("memoriaModel -> buscarPartidasPorUsuario()", fkUsuario);

    fkUsuario = Number(fkUsuario);

    var instrucaoSql = `
        SELECT 
            idPartida,
            pontuacao,
            tempoSegundos,
            dataPartida
        FROM partidaMemoria
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY dataPartida DESC
        LIMIT 5;
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarPartida,
    buscarResumoPorUsuario,
    buscarPartidasPorUsuario
};
