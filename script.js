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

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);



// Comparar intento con numero secreto 

if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El numero era ' + numeroSecreto);
} else {
    alert('❌ ¡Incorrecto! El numero era ' + numeroSecreto);
}