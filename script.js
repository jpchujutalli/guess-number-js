// ===ADIVINA EL NUMERO ===
// El programa genera un numero secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== ADIVINA EL NUMERO ===');


// ---Genera un numero secreto---
const numeroSecreto = Math.floor(Math.random() * 100) +1;

console.log('(DEBUG) Numero secreto: ', numeroSecreto);


// Pedir intento al jugador

let intento = prompt('Adivina el numero (1 - 100): ');
intento = Number(intento);


// Comparar intento con numero secreto 
if (isNaN(intento)) {
    alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
}else if (intento <1 || intento > 100) {
    alert('⚠️ El número debe estar entre 1 y 100.');
}else if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
}else if (intento > numeroSecreto) {
    alert('📈 Muy alto. Intenta un número más bajo.');
}else {
    alert('📉 Muy bajo. Intenta un número más alto.');
}


// if/else normal
let mensaje;
if (intento === numeroSecreto) {
    mensaje = '¡GANASTE!';
} else {
    mensaje = 'Sigue intentando';
}

// Lo mismo con ternario
let mensaje2 = intento === numeroSecreto ? '¡GANASTE!' : 'Intente de nuevo';
console.log(mensaje2)


// Pista de cercania
let diferencia = Math.abs(intento - numeroSecreto);
let cercania = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
console.log(cercania);


// Segundo intento 
if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
    let intento2 = prompt('Intenta de nuevo (1-100):');
    intento2 = Number(intento2);

    if (isNaN(intento2) || intento2 <1 || intento2 > 100) {
        alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
    } else if (intento2 === numeroSecreto) {
        alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
    } else {
        let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
        alert(`Muy ${pista}. El numero era ${numeroSecreto}`);
    }
}





// AND (&&): ambas deben ser true
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia); // true

// OR (||): al menos una debe de ser true
let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo); // true (Domingo es true)

// NOT (!): invierte el valor
let lloviendo = false;
console.log(!lloviendo); // true (NO esta lloviendo)


