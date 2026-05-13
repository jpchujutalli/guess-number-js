// === ADIVINA EL NUMERO - Version DOM ===

// --- Selecionar elementos del HTML
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card')

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje, contador, historial, btnReiniciar, tarjeta);



// --- Tu primera funcion ---
function mostrarMensaje(texto, color, letra) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
    mensaje.style.fontSize = letra;
}

// Prueba la funcion
mostrarMensaje('¡Bienvenido al juego!', '#e94560', '36px');