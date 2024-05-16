// Data da próxima Copa do Mundo 2026
var dataproximacopa = new Date("2026-06-11T00:00:00Z");

function atualizarcontador() {
    var now = new Date();
    var temporestante = dataproximacopa - now;

    // Calcular dias, horas, minutos e segundos restantes
    var dias = Math.floor(temporestante / (1000 * 60 * 60 * 24));
    var horas = Math.floor((temporestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((temporestante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((temporestante % (1000 * 60)) / 1000);

    // Atualizar o elemento HTML com a contagem regressiva
    document.getElementById("countdown").innerHTML = `<div class="align"><div class = quadrado>${dias}</div> :  <div class = quadrado>${horas}</div>  : <div class = quadrado>${minutos}</div>  : <div class = quadrado>${segundos}</div> </div> 
 <div class = retangulo>  <span id="span_cowndown">DIAS        HORAS  -----    MIN   -----   SEG </span> </div> `;
}

// Atualizar a contagem regressiva a cada segundo
setInterval(atualizarcontador, 1000);

// Chamar a função de atualização inicialmente para evitar atrasos na exibição
atualizarcontador();
