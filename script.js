// Data da próxima Copa do Mundo (exemplo: Qatar 2022 - 21 de novembro de 2022)
const nextWorldCupDate = new Date("2026-06-11T00:00:00Z");

function updateCountdown() {
    const now = new Date();
    const timeDiff = nextWorldCupDate - now;

    // Calcular dias, horas, minutos e segundos restantes
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Atualizar o elemento HTML com a contagem regressiva
    document.getElementById("countdown").innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para a próxima Copa do Mundo!`;
}

// Atualizar a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chamar a função de atualização inicialmente para evitar atrasos na exibição
updateCountdown();