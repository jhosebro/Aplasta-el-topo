var topos = "<img  class='img-responsive' src='img/Mole-Animal-PNG-HD-Quality.png' style='width: 15.5em; height: 13em'>"

for (var i = 0; i < 28; i++) {
    $("#dibujandoTopos").append(topos);
    
}

var puntajeReal = 0;
var puntaje = "<h1 class='puntaje text-start' id='puntajeActual'>Puntaje: " + puntajeReal + "</h1>"
$("#puntaje").append(puntaje);


$(".img-responsive").on("click", function(){
    $(this).hide();
    puntajeReal++;
    $("#puntajeActual").remove();
    var puntaje = "<h1 class='puntaje text-start' id='puntajeActual'>Puntaje: " + puntajeReal + "</h1>"
    $("#puntaje").append(puntaje);
})
