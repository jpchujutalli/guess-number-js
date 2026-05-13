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
function mostrarMensaje(texto, color) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
}

// Prueba la funcion
mostrarMensaje('¡Bienvenido al juego!', '#e94560');


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
        mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
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
        mostrarMensaje('🎉 ¡Correcto! Era el ' + numeroSecreto, '#00ff88');
        btnAdivinar.disabled = true;
        btnReiniciar.style.display = 'inline-block';
        // Celebracion visual: la tarjeta brilla verde
        tarjeta.style.borderColor = '#00ff88';
        tarjeta.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.3)';
    } else if (valor > numeroSecreto) {
        let pista = obtenerPista(valor, numeroSecreto);
        mostrarMensaje('📈 Muy alto. ' + pista, '#ff6b6b');
    } else {
        let pista = obtenerPista(valor, numeroSecreto);
        mostrarMensaje('📉 Muy bajo. ' + pista, '#4ecdc4');
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


// ---Reiniciaar juego---
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() *100) +1 ;
    intentos = 0;
    historialIntentos = [];

    contador.textContent = 'Intentos: 0';
    historial.textContent = 'Historial: ';
    mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e94560');

    btnAdivinar.disabled = false;
    btnReiniciar.style.display = 'none';
    inputIntento.value = '';
    inputIntento.focus();

    // Resetear celebracion visul
    tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
    tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';

    console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}

// --- COnectar boton reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);

// --- Pista de cercania ---
function obtenerPista(intento, secreto) {
    let diferencia = Math.abs(intento - secreto);

    if (diferencia <= 5) {
        return '🔥 ¡Muy cerca!';
    } else if (diferencia <= 15) {
        return '♨️ Caliente';
    } else if (diferencia <= 30) {
        return '🌤️ Tibio';
    } else {
        return '❄️ Frío';
    }
}

