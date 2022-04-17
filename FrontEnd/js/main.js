var topos = "<img  class='img-responsive col-md-3 text-center p-5 topo' src='img/Mole-Animal-PNG-HD-Quality.png'>"

for (var i = 0; i < 8; i++) {
    $("#dibujandoTopos").append(topos);
    
}

var puntajeReal = 0;
var puntaje = "<h1 class='text-center fs-3 p-2 border border-5 rounded-pill border-warning bg-success bg-gradient' id='puntajeActual'>Puntaje: " + puntajeReal + "</h1>"
$("#puntaje").append(puntaje);



$(".img-responsive").on("click", function(){
    if( $(".img-responsive").hasClass( "topo" ) ) {
        $(this).removeClass("topo");
        $(this).addClass("fondo");
        $(this).attr("src", "img/fondoVerde.png");
        puntajeReal++;
    }else{
    $(this).removeClass("fondo");
    $(this).addClass("topo");
    $(this).attr("src", "img/Mole-Animal-PNG-HD-Quality.png");
    puntajeReal--;
    }
    if(puntajeReal < 0){
        puntajeReal = 0;
    }
    
    $("#puntajeActual").remove();
    var puntaje = "<h1 class='text-center fs-3 p-2 border border-5 rounded-pill border-warning bg-success bg-gradient' id='puntajeActual'>Puntaje: " + puntajeReal + "</h1>"
    $("#puntaje").append(puntaje);
})


var velocidad = 1000;

let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
    identificadorIntervaloDeTiempo = setInterval(desaparecerFuncion, velocidad);
}

function desaparecerFuncion() {
    if( $(".img-responsive").hasClass( "topo" ) ) {
        $(".img-responsive").removeClass("topo");
        $(".img-responsive").addClass("fondo");
        $(".img-responsive").attr("src", "img/fondoVerde.png");
    }else{
    $(".img-responsive").removeClass("fondo");
    $(".img-responsive").addClass("topo");
    $(".img-responsive").attr("src", "img/Mole-Animal-PNG-HD-Quality.png");
    }
}

document.addEventListener('DOMContentLoaded',repetirCadaSegundo())

