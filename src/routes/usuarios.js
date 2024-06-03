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

// var quizController = require("../controllers/quizController");

router.post("/finishGame", function (req, res) {
    usuarioController.finishGame(req, res);
});

router.post("/kpi1", function(req,res){
    usuarioController.kpi1(req, res);
})

router.post("/kpi2", function(req,res){
    usuarioController.kpi2(req, res);
});

router.post("/kpi3", function(req,res){
    usuarioController.kpi3(req, res);
});

router.post("/kpi4", function(req,res){
    usuarioController.kpi4(req, res);
});

router.post("/grafico2", function(req,res){
    usuarioController.grafico2(req, res);
});

router.post("/grafico1", function(req,res){
    usuarioController.grafico1(req, res);
});


module.exports = router;

