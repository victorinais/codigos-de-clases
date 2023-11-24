/* ejercicio 1 */
var num = 5;
if (num > 0){
    console.log("el numero es positivo");
}else {
    console.log("el numero es negativo");
}


/* ejercicio 2 */
var num = -5;
if (num < 0){
    console.log("el numero es negativo");
}else {
    console.log("el numero es positivo");
}

/* ejercicio 3 */
var num = 6;
if (num % 2 == 0){
        console.log("el numero es par");
}else {
    console.log("el numero es impar");
}

/* ejercicio 4 */
var num = 7;
if (num % 2 == 0){
        console.log("el numero es par");
}else {
    console.log("el numero es impar");
}

/* ejercicio 5 */
var num = -2;
if (num * 5 > 5) {
    console.log("el numero es multiplo de 5");
}else {
    console.log("el numero no es multiplo de 5");
}

/* ejercicio 6 */
var num = 7;
if (num % 3 == 0) {
    console.log("el numero es divisible entre 3");
}else {
    console.log("el numero no es divisible entre 3");
}

/* ejercicio 7 */
var num = 10;
if (num > 100) {
    console.log("el numero es mayor a 100");
}else {
    console.log("el numero es menor a 100");
}

/* ejercicio 8 */
var num = -42;
if (num < -50) {
 console.log("el numero es menor a -50");
}else {
    console.log("el numero es mayor a -50");
}

/* ejercicio 9 */
var num = 20;
if (num >= 20 && num <= 50) {
    console.log("el numero está entre 20 y 50");
}else {
    console.log("el numero no está entre 20 y 50");
}

/* ejercicio 10 */
var num = 0;
if (num == 0) {
    console.log("el numero es igual a cero");
}else {
    console.log("el numero es diferentre a cero");
}

/* ejercicio 11 */
var num = -11;
if (num > -10 & num < 10) {
    console.log("el numero es mayor a -10 y menor a 10");
}else {
    console.log("el numero es menor a -10 o mayor a 10");
}

/* ejercicio 12 */
var num = 2005;
if (num % 4 == 0 & num % 100 > 0) {
    console.log("el año es biciesto");
}else {
    console.log("el año no es biciesto");
}

/* ejercicio 13 */
var num = 18;
if (num >= 18) {
    console.log("la persona es mayor de edad");
}else {
    console.log("la persona es menor de edad");
}

/* ejercicio 15 */
var numRaiz = Math.sqrt(36);
if (numRaiz === parseInt(numRaiz)){
    var cuadradoPerfecto = cuadradoPerfecto + ((numRaiz + 1) * 2) -1;
    console.log("este es un numero cuadrado perfecto");
}else {
    console.log("este no es un numero cuadrado perfecto");
}

/* ejercicio 16 */
function esFibonacci(n) {
    if (n < 0) {
        return false;
    }
    let x = Math.sqrt(5 * Math.pow(n, 2) + 4);
    let y = Math.sqrt(5 * Math.pow(n, 2) - 4);
    return Number.isInteger(x) || Number.isInteger(y);
}
console.log(esFibonacci(21));

/* ejercicio 17 */
function esPotenciaDeDos(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
console.log(esPotenciaDeDos(8));

/* ejercicio 18 */
function esPalindromo(n) {
    let numeroOriginal = n.toString();
    let numeroReverso = numeroOriginal.split('').reverse().join('');
    return numeroOriginal === numeroReverso;
}
console.log(esPalindromo(11));

/* ejercicio 19 */
var frase = "JavaScript es un lenguaje de programación"
function contieneJavaScript(cadena) {
    return cadena.includes("JavaScript");
}
console.log(contieneJavaScript(frase));

/* ejercicio 20 */
var frase = "JavaScript"
function tieneMasDeDiezCaracteres(cadena) {
    return cadena.length > 10;
}
console.log(tieneMasDeDiezCaracteres(frase));

/* ejercicio 21 */
var frase = "JavaScript"
function estaEnMinusculas(cadena) {
    return cadena === cadena.toLowerCase();
}
console.log(estaEnMinusculas(frase));

/* ejercicio 22 */
var frase = "JavaScript 7"
function contieneNumero(texto) {
    return /\d/.test(texto);
}
console.log(contieneNumero(frase));

/* ejercicio 23 */
var frase = "JavaScript 7."
function terminaConPunto(texto) {
    return texto.endsWith(".");
}
console.log(terminaConPunto(frase));

/* ejercicio 24 */
var frase = "JavaScript 7."
function esPangrama(texto) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let letrasUnicas = new Set(texto.toLowerCase().match(/[a-z]/g));
    return letrasUnicas.size === alfabeto.length;
}
console.log(esPangrama(frase));

/* ejercicio 25 */
function esDiaLaborable(fecha) {
    let diaDeLaSemana = fecha.getDay();
    return diaDeLaSemana >= 1 && diaDeLaSemana <= 5;
}
// Uso de la función
var fecha = new Date();
console.log(esDiaLaborable(fecha));

/* ejercicio 26 */
function esFinDeSemana(fecha) {
    let diaDeLaSemana = fecha.getDay();
    return diaDeLaSemana === 0 || diaDeLaSemana === 6;
}
var fecha = new Date();
console.log(esFinDeSemana(fecha));

/* ejercicio 27 */
function esMesValido(numero) {
    return numero >= 1 && numero <= 12;
}
console.log(esMesValido(0));

/* ejercicio 28 */
function esHoraLaboral(hora) {
    return hora >= 9 && hora <= 18;
}
var fecha = new Date();
let horaActual = fecha.getHours();
console.log(esHoraLaboral(horaActual));

/* ejercicio 29 */
var edad = 66;
if (edad > 65){
    console.log("la persona es mayor de 65 años");
}else if (edad < 18) {
    console.log("la persona es menor de 18 años");
}

/* ejercicio 30 */
function esEquilatero(lado1, lado2, lado3) {
    return lado1 === lado2 && lado2 === lado3;
}
console.log(esEquilatero(5, 5, 5));
console.log(esEquilatero(5, 6, 7));

/* ejercicio 31 */
function esIsosceles(lado1, lado2, lado3) {
    return lado1 === lado2 || lado1 === lado3 || lado2 === lado3;
}
console.log(esIsosceles(5, 5, 7));
console.log(esIsosceles(5, 6, 7));

/* ejercicio 32 */
function esEscaleno(a, b, c) {
    if (a !== b && b !== c && a !== c) {
        return true;
    } else {
        return false;
    }
}
console.log(esEscaleno(3, 4, 5));
console.log(esEscaleno(3, 3, 3));

/* ejercicio 33 */
function esMayorQueDoble(num1, num2) {
    return num1 > 2 * num2;
}
console.log(esMayorQueDoble(10, 4));
console.log(esMayorQueDoble(10, 6));

/* ejercicio 34 */
function esMayorQueCien(num1, num2) {
    return num1 + num2 > 100;
}
console.log(esMayorQueCien(60, 50));
console.log(esMayorQueCien(50, 50));

/* ejercicio 35 */
function esMenorQueCincuenta(num1, num2) {
    return num1 - num2 < 50;
}
console.log(esMenorQueCincuenta(100, 40));
console.log(esMenorQueCincuenta(80, 40));

/* ejercicio 36 */
function esDoble(num1, num2) {
    return num1 === 2 * num2;
}
console.log(esDoble(4, 2));
console.log(esDoble(5, 2));

/* ejercicio 37 */
function esDobleIgualTriple(num1, num2) {
    return 2 * num1 === 3 * num2;
}
console.log(esDobleIgualTriple(3, 2));
console.log(esDobleIgualTriple(4, 2));

/* ejercicio 38 */
function esSumaIgualCincuenta(num1, num2) {
    return num1 + num2 === 50;
}
console.log(esSumaIgualCincuenta(25, 25));
console.log(esSumaIgualCincuenta(20, 20));

/* ejercicio 39 */
function esProductoMayorQue500(num1, num2) {
    return num1 * num2 > 500;
}
console.log(esProductoMayorQue500(25, 21));
console.log(esProductoMayorQue500(20, 20));

/* ejercicio 40 */
function esDivisionMenorQueDiez(num1, num2) {
    if (num2 === 0) {
        throw new Error('División por cero no está permitida');
    }
    return num1 / num2 < 10;
}
console.log(esDivisionMenorQueDiez(20, 3));
console.log(esDivisionMenorQueDiez(100, 5));
