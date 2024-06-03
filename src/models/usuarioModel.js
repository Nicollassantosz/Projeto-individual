
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, telefone FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, telefone) VALUES ('${nome}', '${email}', '${senha}', '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finishGame(id, quiz, pontos) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function finishGame()", quiz, id, pontos);
    var instrucaoSql1 = `
    INSERT INTO  tentativaQuiz values
    (null, '${quiz}','${id}', '${pontos}' )
    `;

    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function kpi1(tabelaUser) {
   
    var instrucaoSql1 = `
   
    SELECT COUNT(distinct(fkUsuario)) as 'QtPessoas' from ${tabelaUser};`;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function kpi2(tabelaUser) {
   
    var instrucaoSql1 = `
   
    select max(pontos) as 'Pontuacao' from ${tabelaUser};`;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function kpi3(tabelaUser) {
   
    var instrucaoSql1 = `
   
    select min(pontos) as 'menorPontuacao' from ${tabelaUser};`;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}


function kpi4(tabelaUser) {
   
    var instrucaoSql1 = `
   
    SELECT truncate(avg(pontos),1) as 'media' from ${tabelaUser};`;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function grafico2(tabelaUser) {
   
    var instrucaoSql1 = `
   
    SELECT usuario.nome, fkUsuario, MAX(pontos) AS pontos
    FROM ${tabelaUser} join usuario on fkUsuario = idUsuario
    GROUP BY fkUsuario
    ORDER BY pontos DESC;`;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function grafico1(tabelaUser) {
   
    var instrucaoSql1 = `
   

SELECT usuario.nome, fkUsuario, pontos
    FROM ${tabelaUser}
        AS ultimas_tentativas
    JOIN usuario ON ultimas_tentativas.fkUsuario = usuario.idUsuario
    ORDER BY idTentativa DESC LIMIT 5;
    `;
    
    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

module.exports = {
    autenticar,
    cadastrar,
    finishGame,
    kpi1,
    kpi2,
    kpi3,
    kpi4,
    grafico2,
    grafico1
};