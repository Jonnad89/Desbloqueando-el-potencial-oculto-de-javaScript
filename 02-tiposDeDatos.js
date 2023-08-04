/*
Datos primitivos
    -String / Cadenas de texto
    - Number / Numericos
    - Booleanos
    - Null
    - Undefined
*/

// Cadenas de texto

// Comillas simples "Hola mundo"
// Comillas dobles "Hola, cómo están?"
// Backticks (comillas invertidas) `Hola a todos `



// console.log( `El resultado de la suma es ${4+5}` )
// console.log("El resultado de la suma es ${4+5}")

let cadenaDeTexto = "¡Hola mundo!"

//0 1 2 3 4 5 6 7 8 9 10 11 
//! H o l a   m u n  d  o !

let cadenaIndice = cadenaDeTexto[3]

// console.log( cadenaIndice )

// length -> cantidad total que conforman a una cadena de texto
// dato.propiedad

let longitudCadenaDeTexto = cadenaDeTexto.length;
// console.log( longitudCadenaDeTexto )

let numeroString = "100";

// Number / Numericos

let numeroEntero = 5;

let numeroFlotante = 5.8;

let numeroNegativo = -10;

// Infinity -Infinity NaN -> Not a number

// console.log( "Esta es una string" * 5 )
// console.log( "cadena uno" * "cadea dos" )

// console.log(100 / 0)
// console.log(0/100)
// console.log(-100 / 0)

/* Booleans*/

let booleanoTrue = true;
let booleanoFalse = false;

// Mi nombre es Jonatan

// console.log( 10 < 15 )

// console.log( 0 < -15 )

// Null y undefined

// Null y undefined -> ausencia de valor significativo

let nombreDelMejorEstudiante = null;

let variableSinIniciar;
// console.log(variableSinIniciar)

// console.log( nombreDelMejorEstudiante )

variableSinIniciar = "un valor"
// console.log(variableSinIniciar)

// typeof

console.log(typeof(100))
console.log(typeof("100"))
console.log(typeof(5 < 6))

console.log(typeof(10 - null))

/*
Declarar 3 variables, en una van aguardar su nombre de pila, en otra sus apellidos y en otra su edad, van a crear una cadena de texto donde se van a presentar usando los 3 datos almacenados en las variables

"Hola mundo me llamo "nombre y apellid", soy de tal país, tengo tantos años "

*/