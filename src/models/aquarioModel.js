var database = require("../database/config");

function buscarAquariosPorEmpresa(idFazendeiro) {

  var instrucaoSql = `SELECT * FROM jogo a WHERE fkFazendeiro = ${idFazendeiro}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  buscarAquariosPorEmpresa,
  // cadastrar
}
