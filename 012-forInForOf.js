// const persona = {
//     nombre:"Juan",
//     edad: 30,
//     ocupacion: "Desarrollador",
// };

// for (const propiedad in persona){
//     console.log(`${propiedad}: ${persona[propiedad]}`)
// }

// const frutas = ["manaza", "naranja", "platano"];

// for(const fruta of frutas){
//     console.log(fruta)
// }

// const libro = {
//     titulo: "El nombre del viento",
//     auto: "Patrick Rothfuss",
//     genero:"Fantasia",
//     año: 2007,
// };

// for(const propiedad in libro){
//     if(libro.hasOwnProperty(propiedad)){
//         console.log(`${propiedad}: ${libro[propiedad]}`)
//     }
// }

const inventario = [
    {producto: "Camiseta", precio:20},
    {producto: "Pantalón", precio:35},
    {producto: "Zapatos", precio: 50},
];

let totalPrecio = 0;
for(const item of inventario){
    totalPrecio += item.precio;
}

console.log("Total en inventario", totalPrecio)