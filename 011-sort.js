// const numeros = [5,1,10,3,2];
// numeros.sort();
// console.log(numeros)

// numeros.sort((a,b)=> a - b)
// console.log(numeros)

// const frutas = ["manzana", "naranja", "banana", "uva"];
// frutas.sort();
// console.log(frutas)

// frutas.sort((a,b) => b.localeCompare(a));
// console.log(frutas);

const personas = [
    {nombre: "Jonatan", edad: 25},
    {nombre: "María", edad: 30},
    {nombre: "Pedro", edad: 20},
];

personas.sort((a,b) => a.edad - b.edad);
console.log(personas);