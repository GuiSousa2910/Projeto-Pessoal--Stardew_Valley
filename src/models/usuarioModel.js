var database = require("../database/config");
// var jogoCC = require("../controllers/jogo2Controller")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucaoSql = `
        SELECT idFazendeiro, nomeFazenda, nome, email FROM fazendeiro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, nomeFazenda, id, idFazendeiro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, nomeFazenda);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO fazendeiro (nome, email, senha, nomeFazenda) VALUES ('${nome}', '${email}', '${senha}', '${nomeFazenda}');
    `;
    // INSERT INTO jogoCC (idJogoCC, fkFazendeiro, pontosCC, qntVerde, qntAmarelo, qntRosa, qntRoxo, qntBranco, qntLaranja, hora) VALUES ('${id}','${idFazendeiro}', 0, 0, 0, 0, 0, 0, 0, DATE_FORMAT(CURDATE(), '%d-%m'))
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
};