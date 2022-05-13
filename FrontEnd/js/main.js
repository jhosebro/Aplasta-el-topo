const urlImagenTopo = 'img/Mole-Animal-PNG-HD-Quality.png'
const urlImagenFondoVerde = 'img/fondoVerde.png'
const tablero = document.querySelector('.contenedor')
var puntajeReal = 0
var puntaje = `<h1 class='text-center fs-3 p-2 border border-5 rounded-pill border-warning bg-success bg-gradient' id='puntajeActual'>Puntaje:${puntajeReal}</h1>`


for (var i = 0; i < 12; i++) {
    $("#dibujandoTopos").append(
        `<img  class='img-responsive col-md-2 text-center p-1 topo' id='${i}' src='${urlImagenFondoVerde}'>`
    );
}

$("#puntaje").append(puntaje)

/* --- CAPTURANDO EL EVENTO CLICK --- */
tablero.addEventListener('click', e => {
    if(e.target.classList.contains('img-responsive')){
        if(e.target.classList.contains('topo')){
            puntajeReal++
            e.target.classList.remove('topo')
            e.target.classList.add('fondo')
            e.target.setAttribute('src', urlImagenFondoVerde)
        }else{
            puntajeReal--
        }
    }
})

$(".img-responsive").on("click", 
    function(){
        // if( $(".img-responsive").hasClass( "topo" ) ) {
        //     puntajeReal++;
        //     $(this).removeClass("topo");
        //     $(this).addClass("fondo");
        //     $(this).attr("src", "img/fondoVerde.png");
        //     // console.log('sisas')
        // }else{
        //     puntajeReal--;
        //     $(this).removeClass("fondo");
        //     $(this).addClass("topo");
        //     $(this).attr("src", "img/Mole-Animal-PNG-HD-Quality.png");
        //     // console.log('nonas')
        // }
        if(puntajeReal < 0){
            puntajeReal = 0;
        }
        
        if(puntajeReal >= 10){
            alert("Ganaste capo. Pasa al siguiente nivel.");
            tiempoReal = 60;
            puntajeReal = 0;
        }

        $("#puntajeActual").remove();
        var puntaje = "<h1 class='text-center fs-3 p-2 border border-5 rounded-pill border-warning bg-success bg-gradient' id='puntajeActual'>Puntaje: " + puntajeReal + "</h1>"
        $("#puntaje").append(puntaje);
    })


var velocidad = 300;

let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
    
    identificadorIntervaloDeTiempo = setInterval(desaparecerFuncion, velocidad);
}

function desaparecerFuncion() {
    var numeroRandom = Math.round(Math.random()*17);
    if( $("#"+numeroRandom+"").hasClass( "topo" ) ) {
        $("#"+numeroRandom+"").removeClass("topo");
        $("#"+numeroRandom+"").addClass("fondo");
        $("#"+numeroRandom+"").attr("src", "img/fondoVerde.png");
    }else{
        $("#"+numeroRandom+"").removeClass("fondo");
        $("#"+numeroRandom+"").addClass("topo");
        $("#"+numeroRandom+"").attr("src", "img/Mole-Animal-PNG-HD-Quality.png");
    }
}

var tiempoReal = 60; 

function restarTiempo(){
    tiempoReal--;
    $("#tiempoActual").html("Tiempo: " + tiempoReal);
    if(tiempoReal == 0){
        alert("Perdiste capo. Intenta de nuevo");
        tiempoReal = 60;
        puntajeReal = 0;
    }
}

setInterval(restarTiempo,1000);

document.addEventListener('DOMContentLoaded',repetirCadaSegundo())

