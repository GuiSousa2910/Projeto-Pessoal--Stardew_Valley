var database = require("../database/config");

function cadastrar_jogoCC(id, idFazendeiro, pontosCC, verde, branco, rosa, roxo, amarelo, laranja) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_jogoCC():", id, idFazendeiro, pontosCC, verde, branco, rosa, roxo, amarelo, laranja);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO jogoCC (idJogoCC, fkFazendeiro, pontosCC, qntVerde, qntAmarelo, qntRosa, qntRoxo, qntBranco, qntLaranja, hora) VALUES ('${id}','${idFazendeiro}','${pontosCC}', '${verde}', '${amarelo}', '${rosa}', '${roxo}', '${branco}', '${laranja}', DATE_FORMAT(CURDATE(), '%d-%m'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar_jogoCC(fkFazendeiro) {
    var instrucaoSql = `
    SELECT idJogoCC FROM jogoCC WHERE fkFazendeiro = '${fkFazendeiro}' order by idJogoCC desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosPontosCC(fkFazendeiro, limite_linhas) {

    var instrucaoSql = `
    SELECT pontosCC, qntVerde, qntAmarelo, qntRosa, qntRoxo, qntBranco, qntLaranja, hora, idJogoCC
    FROM jogoCC 
    WHERE fkFazendeiro = ${fkFazendeiro}    
    LIMIT ${limite_linhas};
  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar_jogoCC,
    autenticar_jogoCC,
    buscarUltimosPontosCC
}