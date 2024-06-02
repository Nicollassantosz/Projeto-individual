var database = require("../database/config");



function finishGame(id, quiz, pontos) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function finishGame()", id, quiz, pontos);
    var instrucaoSql1 = `
    INSERT INTO  tentativaQuiz values
    ('${id}','${quiz}', '${pontos}' )
    `;

    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

module.exports = {
    finishGame
};