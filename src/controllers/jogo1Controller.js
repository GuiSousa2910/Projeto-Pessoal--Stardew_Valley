var jogo1Model = require("../models/jogo1Model");

async function cadastrar_jogo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var tempo = req.body.tempoServer;
    var idFazendeiro = req.body.idServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idFazendeiro == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else {

        const id = await jogo1Model.autenticar_jogo(idFazendeiro)
            .then(
                (data) => {
                    return data.length == 0 ? 1 : data[0].idJogo + 1;
                }
            ).catch(

        );

        // Passe os valores como parâmetro e vá para o arquivo jogo1Model.js
        jogo1Model.cadastrar_jogo(pontos, tempo, id, idFazendeiro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function autenticar_jogo(fkFazendeiro) {
    var instrucaoSql = `
        SELECT idJogo FROM jogo WHERE fkFazendeiro = '${fkFazendeiro}' order by idJogo desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosPontos(req, res) {

    let idFazendeiro = req.params.fkFazendeiro;

    jogo1Model.buscarUltimosPontos(idFazendeiro, 10)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado!');
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao buscar as ultimas medidas.', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMedidasEmTempoReal(req, res) {

    var fkFazendeiro = req.params.fkFazendeiro;

    console.log(`Recuperando medidas em tempo real`);

    jogo1Model.buscarMedidasEmTempoReal(fkFazendeiro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAquariosPorEmpresa(req, res) {
    var idUsuario = req.params.fkFazendeiro;

    jogo1Model.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    autenticar_jogo,
    cadastrar_jogo,
    buscarUltimosPontos,
    buscarMedidasEmTempoReal,
    buscarAquariosPorEmpresa
};