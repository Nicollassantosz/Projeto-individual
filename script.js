// Data da próxima Copa do Mundo 2026
var nextWorldCupDate = new Date("2026-06-11T00:00:00Z");

function updateCountdown() {
    var now = new Date();
    var timeDiff = nextWorldCupDate - now;

    // Calcular dias, horas, minutos e segundos restantes
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Atualizar o elemento HTML com a contagem regressiva
    document.getElementById("countdown").innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para a próxima Copa do Mundo!`;
}

// Atualizar a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chamar a função de atualização inicialmente para evitar atrasos na exibição
updateCountdown();