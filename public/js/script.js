// Data da próxima Copa do Mundo 2026
var dataproximacopa = new Date("2026-06-11T00:00:00Z");

function atualizarcontador() {
    var now = new Date();
    var temporestante = dataproximacopa - now;

    var dias = Math.floor(temporestante / (1000 * 60 * 60 * 24));
    var horas = Math.floor((temporestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((temporestante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((temporestante % (1000 * 60)) / 1000);

  
    document.getElementById("countdown").innerHTML = `<div class="align"><div class = "quadrado">${dias}</div> :  <div class = "quadrado">${horas}</div>  : <div class = "quadrado">${minutos}</div>  : <div class = "quadrado">${segundos}</div> </div> 
 <div class = "retangulo"> <div class="kpi_contador"> <span id="span_cowndown">DIAS</span>   <span id="span_cowndown">HORAS</span><span id="span_cowndown">  MIN</span><span id="span_cowndown">  SEG </span> </div> `;
}

setInterval(atualizarcontador, 1000);

atualizarcontador();
