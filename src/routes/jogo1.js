var express = require("express");
var router = express.Router();

var jogo1Controller = require("../controllers/jogo1Controller");

router.post("/cadastrar_jogo", function (req, res) {
    jogo1Controller.cadastrar_jogo(req, res);
});
router.post("/autenticar_jogo", function (req, res) {
    jogo1Controller.autenticar_jogo(req, res);
}); 
 
router.get('/buscarUltimosPontos/:fkFazendeiro', function (req, res) {
    jogo1Controller.buscarUltimosPontos(req, res);
});

router.get("/buscarMedidasEmTempoReal/:fkFazendeiro", function (req, res) {
    jogo1Controller.buscarMedidasEmTempoReal(req, res);
});
module.exports = router;  