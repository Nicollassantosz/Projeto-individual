var startButton = document.querySelector(".start_quiz");
var perguntaContainer = document.querySelector(".perguntas_container");
var respostaContainer = document.querySelector(".respostas_container");
var quentionText = document.querySelector(".perguntas");
var nextButton = document.querySelector(".next_quiz");

startButton.addEventListener("click", startJogo);
nextButton.addEventListener("click", displayProximaPergunta);

var currentQuestion = 0;
var totalCorrect = 0;

function startJogo() {
    startButton.classList.add("hide");
    perguntaContainer.classList.remove("hide");
    displayProximaPergunta();
}

function displayProximaPergunta() {
    while (respostaContainer.firstChild) {
        respostaContainer.removeChild(respostaContainer.firstChild);
    }

    if (currentQuestion === questions.length) {
        return finishGame();
    }

    document.body.removeAttribute("class");
    nextButton.classList.add("hide");

    quentionText.textContent = questions[currentQuestion].question;
    questions[currentQuestion].answer.forEach(answer => {
        var newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        respostaContainer.appendChild(newAnswer);

        newAnswer.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(event) {
    var answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++;
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button !== answerClicked) {
            button.disabled = true;
        }
    });
    nextButton.classList.remove("hide");
    currentQuestion++;
}

function finishGame() {
    var totalQuestion = questions.length;
    var performance = totalCorrect ;

    var message = "";

    if (performance >= 8) {
        message = "Especialista em copas do mundo!";
    } else if (performance >= 6) {
        message = "É fã das copas do mundo";
    } else if (performance >= 5) {
        message = "Sabe um pouco mas pode conhecer mais dessa competição";
    } else if (performance >= 3) {
        message = "Sabe bem pouco sobre copa do mundo, pesquise um pouco mais sobre e garanto que não vai se arrepender";
    } else {
        message = "Você não conhece nada sobre a Copa do mundo. Olhe mais o site e fique atento a proxima";
    }
    
    perguntaContainer.innerHTML = `<p class="mensagem_final">Você acertou ${totalCorrect} de ${totalQuestion} questões!<span>Resultado: ${message}</span></p> 
    <button onclick="window.location.reload()" class="button">
    Refazer quiz!
    </button>`;

    
    nextButton.classList.add("hide");

   
    nextButton.removeEventListener("click", displayProximaPergunta);
}



var questions = [
    {
        question: "Quem é o maior artilheiro da história das copas do mundo?",
        answer: [
            { text: "Klose", correct: true },
            { text: "Pelé", correct: false },
            { text: "Gerd Muller", correct: false },
            { text: "Romário", correct: false },
        ],
    },
    {
        question: "Em que ano Maradona fez um gol de mão conhecido como: lá mano de Dios?",
        answer: [
            { text: "1982", correct: false },
            { text: "1986", correct: true },
            { text: "1990", correct: false },
            { text: "1970", correct: false },
        ],  
    },
    {
        question: "Qual foi o ano da primeira copa ganha pela seleção Brasileira?",
        answer: [
            { text: "1950", correct: false },
            { text: "1954", incorrect: false },
            { text: "1958", correct: true },
            { text: "1962", correct: false },
        ],
    },
    {
        question: "Qual jogador levou a famosa cabeçada do Zidane?",
        answer: [
            { text: "Nesta", correct: false },
            { text: "Cannavaro", correct: false },
            { text: "Materazzi", correct: true },
            { text: "Pirlo", correct:  false},
        ],
    },
    {
        question: "Qual o placar mais comum em finais de copa do mundo?",
        answer: [
            { text: "2 x 1", correct: false },
            { text: "1 x 0", correct: false },
            { text: "4 x 3", correct: false },
            { text: "4 x 2", correct: true },
        ],
    },
    {
        question: "O Brasil é ...",
        answer: [
            { text: "Hexa", correct: false },
            { text: "Tetra", correct: false },
            { text: "Penta", correct: true },
            { text: "Tri", correct: false },
        ],
    },
    {
        question: "Qual foi a final da Copa do Mundo de 2010?",
        answer: [
            { text: "Espanha x Brasil", correct: false},
            { text: "Espanha x França", correct: false },
            { text: "Espanha x Holanda", correct: true },
            { text: "Espanha x Alemanha", correct: false },
        ],
    },
    {
        question: "Qual foi o melhor goleiro da Copa de 2018?",
        answer: [
            { text: "Mbappe", correct: false },
            { text: "Courtois", correct: true },
            { text: "Neuer", correct: false },
            { text: "Lloris", correct: false },
        ],
    },
    {
        question: "Quantas Copas do mundo femininas a seleção feminina do Brasil tem?",
        answer: [
            { text: "5", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false },
            { text: "0", correct: true },
        ],
    },
    {
        question: "Quantas edições de Copa do mundo já aconteceram?",
        answer: [
            { text: "22", correct: true },
            { text: "21", correct: false },
            { text: "20", correct: false },
            { text: "23", correct: false },
        ],
    },
];