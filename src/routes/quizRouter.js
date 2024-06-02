var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/finishGame", function (req, res) {
    quizController.finishGame(req, res);
});

module.exports = router;