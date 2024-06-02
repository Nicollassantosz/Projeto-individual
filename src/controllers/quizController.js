var quizModel = require("../models/quizModel");

function finishGame(req, res) {
    var id = req.body.idServer;
    var quiz = req.body.idquiz;
    var pontos = req.body.pontos;

    if (id == undefined || quiz == undefined || pontos == undefined) {
        res.status(400).send("Erro!");
    } else {
        quizModel.finishGame(id, quiz, pontos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao finalizar o quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    finishGame
};
