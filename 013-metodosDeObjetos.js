// const persona = {
//     nombre: "Jonatan",
//     edad: 34,
//     saludar() {
//         console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//     }
// };

// persona.saludar()

const calculadora = {
    sumar(a, b){
        return a + b;
    },
    restar(a ,b){
        return a - b;
    }
};

console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(10, 5))