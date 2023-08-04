// function saludar(nombre, callback){
//     console.log("Hola, " + nombre + "!")
//     callback()
// }

// function despedirse(){
//     console.log("¡Hasta luego!");
// }

// saludar("Jonatan", despedirse)

function hacerPeticion(url, callback){
    setTimeout(function(){
        const datos = {id: 1, nombre: "Ejemplo"};
        callback(datos);
    }, 2000)
}

function procesarRespuesta(datos){
    console.log("Datos recibidos: ", datos);
}

hacerPeticion("https://ejemplo.com/api/datos", procesarRespuesta)