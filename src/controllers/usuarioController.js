var usuarioModel = require("../models/usuarioModel");
// var jogo2Model = require("../models/jogo2Model");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.status(200).json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

async function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nomeFazenda = req.body.fazendaServer;
    // var idFazendeiro = req.body.idCCServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        console.log("Seu nome está undefined!");
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        console.log("Seu email está undefined!");
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        console.log("Seu senha está undefined!");
        res.status(400).send("Sua senha está undefined!");
    } else if (nomeFazenda == undefined) {
        console.log("Seu fazedna está undefined!");
        res.status(400).send("Sua fazenda está undefined!");
    }

    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, nomeFazenda)
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

        usuarioModel.cadastrarJogo().then(
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

module.exports = {
    autenticar,
    cadastrar,
};