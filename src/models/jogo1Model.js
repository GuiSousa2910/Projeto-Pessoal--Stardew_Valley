var database = require("../database/config");

function cadastrar_jogo(pontos, tempo, id, idFazendeiro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_jogo():", pontos, tempo, id, idFazendeiro);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO jogo (idJogo, fkFazendeiro, pontos, tempo) VALUES ('${id}','${idFazendeiro}','${pontos}', '${tempo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar_jogo(fkFazendeiro) {
    var instrucaoSql = `
        SELECT idJogo FROM jogo WHERE fkFazendeiro = '${fkFazendeiro}' order by idJogo desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosPontos(fkFazendeiro, limite_linhas) {

    var instrucaoSql = `
    SELECT tempo, pontos 
    FROM jogo 
    WHERE fkFazendeiro = ${fkFazendeiro}    
    ORDER BY tempo ASC 
    LIMIT ${limite_linhas};
  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkFazendeiro) {

    var instrucaoSql = `
    SELECT tempo, pontos 
    FROM jogo 
    WHERE fkFazendeiro = ${fkFazendeiro}    
    ORDER BY tempo ASC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarAquariosPorEmpresa(fkFazendeiro) {

    var instrucaoSql = `SELECT * FROM jogo WHERE fkFazendeiro = ${fkFazendeiro}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    cadastrar_jogo,
    autenticar_jogo,
    buscarUltimosPontos,
    buscarMedidasEmTempoReal,
    buscarAquariosPorEmpresa
};