var jogo2Model = require("../models/jogo2Model");

async function cadastrar_jogoCC(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontosCC = req.body.pontosCCServer;
    var verde = req.body.verdeServer;
    var branco = req.body.brancoServer;
    var rosa = req.body.rosaServer;
    var roxo = req.body.roxoServer;
    var amarelo = req.body.amareloServer;
    var laranja = req.body.laranjaServer;
    var idFazendeiro = req.body.idCCServer;

    // Faça as validações dos valores
    if (pontosCC == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (verde == undefined) {
        res.status(400).send("Seu email está undefined!");
    } 
    else if (branco == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (rosa == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (roxo == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (amarelo == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (laranja == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (idFazendeiro == undefined) {
        res.status(400).send("Seu email está undefined!");
    }


    else {

        const idCC = await jogo2Model.autenticar_jogoCC(idFazendeiro)
            .then(
                (data) => {
                    return data.length == 0 ? 1 : data[0].idJogoCC + 1;
                }
            ).catch(

        );

        // Passe os valores como parâmetro e vá para o arquivo jogo2Model.js
        jogo2Model.cadastrar_jogoCC(idCC, idFazendeiro, pontosCC, verde, branco, rosa, roxo, amarelo, laranja)
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

function autenticar_jogoCC(fkFazendeiro) {
    var instrucaoSql = `
    SELECT idJogoCC FROM jogoCC WHERE fkFazendeiro = '${fkFazendeiro}' order by idJogoCC desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosPontosCC(req, res) {

    let idFazendeiro = req.params.fkFazendeiro;

    jogo2Model.buscarUltimosPontosCC(idFazendeiro, 10)
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

module.exports = {
    cadastrar_jogoCC,
    autenticar_jogoCC,
    buscarUltimosPontosCC
};