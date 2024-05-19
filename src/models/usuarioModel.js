var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
        SELECT idFazendeiro, nomeFazenda, nome, email FROM fazendeiro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, nomeFazenda) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, nomeFazenda);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO fazendeiro (nome, email, senha, nomeFazenda) VALUES ('${nome}', '${email}', '${senha}', '${nomeFazenda}');
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

function autenticar_jogoCC(fkFazendeiro) {
    var instrucaoSql = `
    SELECT idJogoCC FROM jogoCC WHERE fkFazendeiro = '${fkFazendeiro}' order by idJogoCC desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar_jogoCC(id, idFazendeiro, pontosCC, verde, branco, rosa, roxo, amarelo, laranja,) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_jogoCC():",  id, idFazendeiro,pontosCC, verde, branco, rosa, roxo, amarelo, laranja);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO jogoCC (idJogoCC, fkFazendeiro, pontosCC, qntVerde, qntAmarelo, qntRosa, qntRoxo, qntBranco, qntLaranja) VALUES ('${id}','${idFazendeiro}','${pontosCC}', '${verde}', '${amarelo}', '${rosa}', '${roxo}', '${branco}', '${laranja}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrar_jogo,
    cadastrar_jogoCC,
    autenticar_jogo,
    autenticar_jogoCC
};