//Palabras para el juego
let palabras = ['javascript', 'funcion', 'arreglo', 'metodo', 'programacion'];
// Selecciona una palabra al azar
let palabra = palabras[Math.floor(Math.random() * palabras.length)];

// Crea un arreglo para la respuesta
let respuesta = [];
for (let i = 0; i < palabra.length; i++) {
  respuesta[i] = '_';
}

let letrasRestantes = palabra.length;

// Bucle principal del juego
while (letrasRestantes > 0) {
  // Muestra el progreso del jugador
  alert(respuesta.join(' '));

  // Obtiene una suposición del jugador
  let suposicion = prompt('Adivina una letra, o haz clic en Cancelar para detener el juego.');
  if (suposicion === null) {
    // Sale del bucle del juego
    break;
  } else if (suposicion.length !== 1) {
    alert('Por favor, introduce una sola letra.');
  } else {
    // Actualiza el estado del juego con la suposición
    for (let j = 0; j < palabra.length; j++) {
      if (palabra[j] === suposicion) {
        respuesta[j] = suposicion;
        letrasRestantes--;
      }
    }
  }
}

// Muestra la respuesta y felicita al jugador
alert(respuesta.join(' '));
alert('¡Buen trabajo! La respuesta era ' + palabra);