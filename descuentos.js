// === CALCULADORA DE DESCUENTOS ===
let precioTotal = prompt('Ingrese el precio total de su compra para verificar si cuenta con descuento:')
precioTotal = Number(precioTotal);

const descuento1 = 0.20;
const descuento2 = 0.10;

let precioFinal;


if (isNaN(precioTotal) || precioTotal < 1) {
    alert('Intente nuevamente, no se coloco correctamente la informacion');
} else if (precioTotal > 100) {
    // alert('Felicidades, Ud tiene un descuento del 20%');
    precioFinal = precioTotal - (precioTotal * descuento1);
    // console.log(`El precio final de su compra es ${precioFinal} soles.`);
} else if (precioTotal <= 100 && precioTotal >= 50) {
    // alert('Felicidades, Ud tiene un descuento del 10%');
    precioFinal = precioTotal - (precioTotal * descuento2);
    // console.log(`El precio final de su compra es ${precioFinal} soles.`);
} else {
    // alert('Ud. por el momento no tiene descuento. ¡Gracias por su compra!');
    precioFinal = precioTotal;
    // console.log(`El precio final de su compra es ${precioTotal} soles.`);
}

alert(`El precio a pagar final es de ${precioFinal} soles.`);