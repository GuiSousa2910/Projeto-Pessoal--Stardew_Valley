var express = require("express");
var router = express.Router();

var jogo2Controller = require("../controllers/jogo2Controller");

router.post("/cadastrar_jogoCC", function (req, res) {
    jogo2Controller.cadastrar_jogoCC(req, res);
});
router.post("/autenticar_jogoCC", function (req, res) {
    jogo2Controller.autenticar_jogoCC(req, res);
});

module.exports = router;