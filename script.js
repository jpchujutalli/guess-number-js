let nombre = 'Jian Pierre';
let edad = 29;
let estaAprendiendo = true;

console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);

const curso = 'code 101';
const maxIntentos = 10;

console.log(curso);
console.log(maxIntentos);


let nombreUsuario = prompt('¿Como te llamas?');
let edadUsuario = prompt('¿Cual es tu edad?');

alert('Hola ' + nombreUsuario + ' tienes ' + edadUsuario + ' años');

console.log('Nombre', nombreUsuario);
console.log('Edad', edadUsuario);
console.log(typeof edadUsuario);


/* operadores asimetricos */

let a = 20;
let b = 7;

console.log('Suma', a + b);
console.log('Resta', a - b);
console.log('Multiplicacion', a * b);
console.log('Division', a / b);
console.log('Modulo', a % b);


console.log('5' + 3);
console.log(5 + 3);
console.log('5' - 3);

let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + 'años';
console.log(saludo1);

let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años`;
console.log(saludo2);


let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}`);
