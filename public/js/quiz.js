var botaocomecar = document.querySelector(".start_quiz");
var perguntaContainer = document.querySelector(".perguntas_container");
var respostaContainer = document.querySelector(".respostas_container");
var textoquestao = document.querySelector(".perguntas");
var proximabotao = document.querySelector(".next_quiz");




var idQuiz = 1;


botaocomecar.addEventListener("click", startJogo);
proximabotao.addEventListener("click", displayProximaPergunta);

var questaoatual = 0;
var pontuacao = 0;


function startJogo() {
    botaocomecar.classList.add("hide");
    perguntaContainer.classList.remove("hide");
    displayProximaPergunta();
}

function displayProximaPergunta() {
    while (respostaContainer.firstChild) {
        respostaContainer.removeChild(respostaContainer.firstChild);
    }

    if (questaoatual === questoes.length) {
        return finishGame();
    }
 
    proximabotao.classList.add("hide");

        textoquestao.textContent = questoes[questaoatual].question;
        questoes[questaoatual].answer.forEach(answer => {
            var novaquestao = document.createElement("button");
            novaquestao.classList.add("button", "answer");
            novaquestao.textContent = answer.text;
            if (answer.correct) {
                novaquestao.dataset.correct = answer.correct;
            }
            respostaContainer.appendChild(novaquestao);

            novaquestao.addEventListener("click", selecionequestao);
        })
    }

function selecionequestao(event) {
    var questaoclick = event.target;

    if (questaoclick.dataset.correct) {
        questaoclick.classList.add("correct");
        pontuacao++;
    } else {
        questaoclick.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button !== questaoclick) {
            button.disabled = true;
        }
    });
    proximabotao.classList.remove("hide");
    questaoatual++;
}

function finishGame() {
    var totalquestoes = questoes.length;
    var performance = pontuacao;

    var msg = "";

    if (performance >= 8) {
        msg = "Especialista em copas do mundo! Parabéns! Olhe se entrou no pódio";
    } else if (performance >= 6) {
        msg = "É fã das copas do mundo, foi bem";
    } else if (performance >= 5) {
        msg = "Sabe um pouco mas pode conhecer mais dessa competição, garanto que vai gostar";
    } else if (performance >= 3) {
        msg = "Sabe bem pouco sobre copa do mundo, pesquise um pouco mais sobre e garanto que não vai se arrepender";
    } else {
        msg = "Você não conhece quase nada sobre Copa do mundo. Conheça meu site e tente o quiz novamente";
    }

    perguntaContainer.innerHTML = `<p class="mensagem_final">Você acertou ${pontuacao} de ${totalquestoes} questões!<span>Resultado: ${msg}</span></p> 
    <a href="dashboard.html"><button class="button">
    Ir para a Dashboard!
    </button>
    </a>`;



    proximabotao.classList.add("hide");


    proximabotao.removeEventListener("click", displayProximaPergunta);

    var id = sessionStorage.ID_USUARIO;
    var idquiz = 1;


    fetch("/usuarios/finishGame", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id,
            idquiz: idquiz,
            pontos: performance

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO quiz()!")
        if (resposta.ok) {
            console.log(resposta);


            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.id = json.id;
                sessionStorage.idquiz = json.idquiz;
                sessionStorage.pontos = json.pontos;



            });

        } else {
            console.log("Houve um erro ao terminar o quiz!");

            resposta.text().then(texto => {
                console.error(texto);

            });

        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}



var questoes = [
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
            { text: "Pirlo", correct: false },
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
            { text: "Espanha x Brasil", correct: false },
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
        question: "Quantas Copas do mundo a seleção feminina do Brasil tem?",
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