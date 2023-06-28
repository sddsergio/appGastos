
//alert("Esto es un alert en JS")
//prompt("Esto es un prompt en JS")
//console.log("Esto se muestra en consola del navegador")
///alert("Welcome to JS!!! Funcion saludo en consola con 2 parametros")

function saludo(nombre, apellido){
    
    var fechaYHoraActual = new Date();
    var horaActual = fechaYHoraActual.getHours();
        
    var divSaludo = document.getElementById("divSaludo")
    
    const image = document.createElement('img')
    const image1 = document.createElement('img')
    const image2 = document.createElement('img')
    image.src  = 'resources/img/Tulips.jpg'
    image1.src  = 'resources/img/Desert.jpg'
    image2.src  = 'resources/img/Noche.jpg'
    

    var firstPartMessage = "";
    // console.log(horaActual)
        
    if (horaActual > 7 && horaActual < 13){
        firstPartMessage = `Buenos Dias, ${nombre + " " + apellido}`
        console.log(`Buenos Dias, ${nombre + " " + apellido}`) 
        divSaludo.innerText = (firstPartMessage)
        document.querySelector('#divSaludo').appendChild(image)  
    }
    if (horaActual >= 13 && horaActual < 19){
        firstPartMessage = `Buenas Tardes, ${nombre + " " + apellido}`
        console.log(`Buenas Tardes, ${nombre + " " + apellido}`) 
        divSaludo.innerText = (firstPartMessage)
        document.querySelector('#divSaludo').appendChild(image1)    
    }
    if (horaActual >= 19 && horaActual > 0) {
        firstPartMessage = `Buenas Noches, ${nombre + " " + apellido}`
        console.log(`Buenas Noches, ${nombre + " " + apellido}`) 
        divSaludo.innerText = (firstPartMessage)
        document.querySelector('#divSaludo').appendChild(image2)  
    }    
    if (horaActual > 0  && horaActual < 7) {
        firstPartMessage = `Buenas Noches, ${nombre + " " + apellido}`
        console.log(`Buenas Noches, ${nombre + " " + apellido}`) 
        divSaludo.innerText = (firstPartMessage)
    }}


saludo("Sergio", "Destefano")
// saludo("Angel", "Larghi")
// saludo("Juan", "Pasman")

///alert(firstPartMessage)
///alert(`Hola ${nombre + " " + apellido} como estas`)
///console.log("Hola "+ nombre +" "+ apellido + " Son las " + new Date()) 


    