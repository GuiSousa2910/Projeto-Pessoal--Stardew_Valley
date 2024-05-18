var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrar_jogo", function (req, res) {
    usuarioController.cadastrar_jogo(req, res);
});
router.post("/autenticar_jogo", function (req, res) {
    usuarioController.autenticar_jogo(req, res);
});

router.post("/cadastrar_jogoCC", function (req, res) {
    usuarioController.cadastrar_jogoCC(req, res);
});
router.post("/autenticar_jogoCC", function (req, res) {
    usuarioController.autenticar_jogoCC(req, res);
});
 
module.exports = router;