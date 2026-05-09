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
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
    console.log('Resultado: ¡GANÓ!');
}else if (intento > numeroSecreto) {
    alert('📈 Muy alto. Intenta un número más bajo.');
    console.log('Resultado: ¡MUY ALTO!');
}else {
    alert('📉 Muy bajo. Intenta un número más alto.');
    console.log('Resultado: ¡MUY BAJO!');
}

// Segundo intento

if (intento !== numeroSecreto) {
    let intento2 = prompt('Intenta de nuevo (1-100):');
    intento2 = Number(intento2);

    if (intento2 === numeroSecreto) {
        alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
        console.log('Resultado: ¡GANÓ!');
    }else if (intento2 > numeroSecreto) {
        alert('📈 Muy alto. Intenta un número más bajo.');
        console.log('Resultado: ¡MUY ALTO!');
    }else {
        alert('📉 Muy bajo. Intenta un número más alto.');
        console.log('Resultado: ¡MUY BAJO!');
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
