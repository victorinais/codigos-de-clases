const mensaje = document.getElementById("boton");

function mostrarMensaje(){
    document.getElementById("mensaje").innerText = "Revisa la consola del navegador y encontrarás lo que buscas";
}

mensaje.addEventListener('click', mostrarMensaje);


/* caso 1 */

// Salario de Hildebrando
let salario = 2500000;

// Costo de las comidas
let almojabana = 15000;
let subway = 23000;

// Función para calcular el dinero restante
function calcularDineroRestante(salario, costoComida) {
    return salario - costoComida;
}

// Imprimir los resultados
console.log("Si Hildebrando compra una almojábana, le quedarán: " + calcularDineroRestante(salario, almojabana));
console.log("Si Hildebrando compra un subway, le quedarán: " + calcularDineroRestante(salario, subway));
console.log("Si Hildebrando no compra nada, le quedarán: " + salario);

/* caso 2 */

// Dimensiones originales de la maleta
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Dimensiones permitidas por la aerolínea
let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

// Cálculo de los factores de reducción para cada dimensión
let factorReduccionAlto = altoPermitido / altoOriginal;
let factorReduccionLargo = largoPermitido / largoOriginal;
let factorReduccionAncho = anchoPermitido / anchoOriginal;

// Encontrar el factor de reducción más pequeño
let factorReduccion = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

// Cálculo de las nuevas dimensiones
let nuevoAlto = altoOriginal * factorReduccion;
let nuevoLargo = largoOriginal * factorReduccion;
let nuevoAncho = anchoOriginal * factorReduccion;

console.log("Las nuevas dimensiones de la maleta son: ");
console.log("Alto: " + nuevoAlto.toFixed(1) + " cm");
console.log("Largo: " + nuevoLargo.toFixed(1) + " cm");
console.log("Ancho: " + nuevoAncho.toFixed(1) + " cm");

/* caso 3 */

// La contraseña cifrada en binario
let contrasenaBinaria = "01110010_01101001_01110111_01101001";

// Dividimos la contraseña en binario en un array de números binarios
let arrayBinario = contrasenaBinaria.split("_");

// Inicializamos la contraseña decodificada
let contrasenaDecodificada = "";

// Recorremos el array de números binarios
for (let i = 0; i < arrayBinario.length; i++) {
    // Convertimos cada número binario a decimal
    let decimal = parseInt(arrayBinario[i], 2);
    // Convertimos el número decimal a un carácter y lo añadimos a la contraseña decodificada
    contrasenaDecodificada += String.fromCharCode(decimal);
}

console.log("La contraseña decodificada es: " + contrasenaDecodificada);

/* caso 4 */

// La frase original
let fraseOriginal = "Taxi me puede llevar al hotel mariposas amarillas";

// Convertimos la frase a un array de caracteres
let arrayFrase = fraseOriginal.split("");

// Recorremos el array de caracteres
for (let i = 0; i < arrayFrase.length; i++) {
    // Si el carácter es una vocal, lo cambiamos por "i"
    if (arrayFrase[i] == "a" || arrayFrase[i] == "e" || arrayFrase[i] == "o" || arrayFrase[i] == "u") {
        arrayFrase[i] = "i";
    }
}

// Convertimos el array de caracteres a una frase
let fraseConvertida = arrayFrase.join("");

console.log("La frase convertida es: " + fraseConvertida);

/* caso 5 */

// El dinero disponible
let dineroDisponible = 2500000;

// Las opciones para el juego de papel, piedra o tijera
let opciones = ["papel", "piedra", "tijera"];

// La elección de Hildebrando
let eleccionHildebrando = opciones[Math.floor(Math.random() * opciones.length)];

// La elección del taxista
let eleccionTaxista = opciones[Math.floor(Math.random() * opciones.length)];

console.log("Hildebrando eligió: " + eleccionHildebrando);
console.log("El taxista eligió: " + eleccionTaxista);

// Comprobamos quién gana
if (eleccionHildebrando == eleccionTaxista) {
    console.log("Empate. No pasa nada.");
} else if ((eleccionHildebrando == "papel" && eleccionTaxista == "piedra") || 
           (eleccionHildebrando == "piedra" && eleccionTaxista == "tijera") || 
           (eleccionHildebrando == "tijera" && eleccionTaxista == "papel")) {
    console.log("Hildebrando gana. No tiene que pagar nada.");
} else {
    console.log("El taxista gana. Hildebrando tiene que pagar 300.000 pesos.");
    dineroDisponible -= 300000;
}

console.log("Dinero disponible: " + dineroDisponible + " pesos");

/* caso 6 */

// Variables iniciales
let diasEnMacondo = 0;
let vivo = true;
let dinero = 300000;

// Actividades para cada día
let actividades = {
    "amarillo": ["piscina", "descanso"],
    "verde": ["caminata", "descanso"],
    "roja": ["voleibol", "descanso", "cocteles"],
    "azul": ["bingo", "baile", "casino"]
};

// Recorremos las actividades de cada día
for (let color in actividades) {
    if (!vivo) break; // Si Hildebrando no está vivo, terminamos el ciclo

    console.log("Día " + (diasEnMacondo + 1) + ": " + color);
    let actividadesDia = actividades[color];

    for (let i = 0; i < actividadesDia.length; i++) {
        let actividad = actividadesDia[i];

        switch (actividad) {
            case "piscina":
                // Hildebrando decide no meterse a la piscina
                console.log("Hildebrando decide no meterse a la piscina.");
                break;
            case "caminata":
                // Hildebrando decide ir toda la caminata
                console.log("Hildebrando decide ir toda la caminata.");
                break;
            case "voleibol":
                // Hildebrando juega voleibol
                console.log("Hildebrando juega voleibol.");
                break;
            case "cocteles":
                // Hildebrando decide no tomar cocteles
                console.log("Hildebrando decide no tomar cocteles.");
                break;
            case "bingo":
                // Hildebrando gana el bingo y aumenta su dinero
                console.log("Hildebrando gana el bingo.");
                dinero += 50000;
                break;
            case "casino":
                // Hildebrando decide no apostar en el casino
                console.log("Hildebrando decide no apostar en el casino.");
                break;
            default:
                console.log("Hildebrando decide descansar.");
        }
    }

    diasEnMacondo++;
}

console.log("Hildebrando estuvo " + diasEnMacondo + " días en Macondo.");
console.log(vivo ? "Hildebrando pudo regresar." : "Hildebrando no pudo regresar.");
console.log("Hildebrando gastó " + (300000 - dinero) + " pesos.");
