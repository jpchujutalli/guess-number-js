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


// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() *100) + 1;
let intentos = 0;
let historialIntentos = [];

console.log('(DEBUG) Numero secreto:', numeroSecreto);



// --- FUncion principal ---
function verificarIntento() {
    let valor = Number(inputIntento.value);

    // Validar entrada
    if (isNaN(valor) || valor < 1 || valor > 100) {
        mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange', '36px');
        return
    }
    
    // Incrementar contador
    intentos++;
    contador.textContent = 'Intentos: ' + intentos;

    // Agregar al historial 
    historialIntentos.push(valor);
    historial.textContent = 'Historial: ' + historialIntentos.join(', ');

    // Comparar con el numero secreto
    if (valor === numeroSecreto) {
        mostrarMensaje('🎉 ¡Correcto! Era el ' + numeroSecreto, '#00ff88', '36px');
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'inline-block';
        // Celebracion visual: la tarjeta brilla verde
        tarjeta.style.borderColor = '#00ff88';
        tarjeta.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.3)';
    } else if (valor > numeroSecreto) {
        mostrarMensaje('📈 Muy alto. Intenta más bajo.', '#ff6b6b', '36px');
    } else {
        mostrarMensaje('📉 Muy bajo. Intenta más alto.', '#4ecdc4', '36px');
    }

    // Limpiar input y enfocar
    inputIntento.value = '';
    inputIntento.focus();
}

// ---Conectar eventos ---
btnAdivinar.addEventListener('click', verificarIntento);


// ---Enter tambien funciona ---
inputIntento.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        verificarIntento();
    }
});
