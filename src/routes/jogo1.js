var express = require("express");
var router = express.Router();

var jogo1Controller = require("../controllers/jogo1Controller");

router.post("/cadastrar_jogo", function (req, res) {
    jogo1Controller.cadastrar_jogo(req, res);
});
router.post("/autenticar_jogo", function (req, res) {
    jogo1Controller.autenticar_jogo(req, res);
}); 

router.get('/ultimas/:fkFazendeiro', function (req, res) {
    let idFazendeiro = req.params.fkFazendeiro;
    jogo1Controller.buscarUltimosPontos(idFazendeiro, res);
});

router.get("/tempo-real/:fkFazendeiro", function (req, res) {
    let idFazendeiro = req.params.fkFazendeiro;
    jogo1Controller.buscarPontosEmTempoReal(idFazendeiro, res);
});
module.exports = router; 