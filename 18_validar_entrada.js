const readline = require('readline-sync');

let sumaTotal = 0;
let numeroActual = 1;

console.log("Ingresa números para sumar. Ingresa 0 para terminar y ver el resultado.");

while (numeroActual !== 0) {
  const input = readline.question("Ingresa un numero (o 0 para terminar): ");
  const num = parseInt(input);

  if (isNaN(num)) {
    console.log("🚫 Entrada invalida. Por favor, ingresa un número.");
    continue;
  }

  numeroActual = num;
  sumaTotal += numeroActual;
}

console.log(`\nTotal de la suma: ${sumaTotal}`);