const readline = require('readline-sync');

let numero;
while (isNaN(numero) || numero < 0) {
  const input = readline.question("Ingresa un numero positivo para iniciar la cuenta regresiva: ");
  numero = parseInt(input);
  if (isNaN(numero) || numero < 0) {
    console.log("Entrada invalida. Por favor, ingresa un número positivo.");
  }
}

console.log(`\nIniciando cuenta regresiva desde ${numero}:`);
a
while (numero >= 0) {
  console.log(numero);
  numero--;
}

console.log("¡Lanzamiento completado!");