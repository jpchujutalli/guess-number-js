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
    contador.textContent = 'Intentos: ' + intentos + ' / 10'; // Mostramos el límite

    // Agregar al historial 
    historialIntentos.push(valor);
    let color = valor > numeroSecreto ? '#ff6b6b' : valor < numeroSecreto ? '#4ecdc4' : '#00ff88';
    const pildora = `<span class="guess-pill" style="
        background: ${color}20; 
        color: ${color}; 
        border: 1px solid ${color};
        padding: 5px 12px;
        border-radius: 20px;
        margin: 5px;
        display: inline-block;
        font-weight: bold;
        box-shadow: 0 2px 10px ${color}30;
    ">${valor}</span>`;
    historial.innerHTML += pildora;

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
        tarjeta.style.borderColor = color; // Para que la tarjeta "reaccione" al error
        mostrarMensaje('📈 Muy alto. ' + pista, '#ff6b6b');
    } else {
        let pista = obtenerPista(valor, numeroSecreto);
        mostrarMensaje('📉 Muy bajo. ' + pista, '#4ecdc4');
        tarjeta.style.borderColor = color; // Para que la tarjeta "reaccione" al error
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

// --- Space tambien funciona ---
inputIntento.addEventListener('keydown', function(evento){
    if (evento.key === 'Spacebar' || evento.key === ' '){
        reiniciarJuego();
    }
});


// ---Reiniciaar juego---
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() *100) +1 ;
    intentos = 0;
    historialIntentos = [];

    contador.textContent = 'Intentos: 0';
    historial.innerHTML = '';
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
