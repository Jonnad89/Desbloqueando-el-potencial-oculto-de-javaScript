function saludar(){
    console.log("Hola! Bienvenido")
};

saludar(); // llamada a la función: imprimira "Hola! Bienvenido"

function sumar(num1, num2){
    let resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado)
}

sumar(5,3);

function multiplicar(num1, num2){
    return num1 * num2;
}

let resultado = multiplicar(4,2);
console.log( "el resultado de la multiplicación es: " + resultado );