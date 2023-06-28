let botonhola = document.getElementById("eventhola");
let botonchau = document.getElementById("eventchau");
botonhola.addEventListener("click", saludar)
botonchau.addEventListener("click", despedir);

function saludar(){
    var fechaYHoraActual = new Date();
    var horaActual = fechaYHoraActual.getHours();
    
    if (horaActual > 7 && horaActual < 13){
        botonhola.innerText = "Buenos diaaaas"
    }
    if (horaActual >= 13 && horaActual < 19){   
        botonhola.innerText = "Buenos tardes"
    }
    if (horaActual >= 19 && horaActual > 0) {
        botonhola.innerText = "Buenos noches"
    }    
    if (horaActual > 0  && horaActual < 7) {
        botonhola.innerText = "Buenos noches"
    }
}
    
function despedir(){
    var fechaYHoraActual = new Date();
    var horaActual = fechaYHoraActual.getHours();
    
    if (horaActual > 7 && horaActual < 13){
        botonchau.innerText = "Buenos diaaaas"
    }
    if (horaActual >= 13 && horaActual < 19){   
        botonchau.innerText = "Buenos tardes"
    }
    if (horaActual >= 19 && horaActual > 0) {
        botonchau.innerText = "Buenos noches"
    }    
    if (horaActual > 0  && horaActual < 7) {
        botonchau.innerText = "Buenos noches"
    }
}

