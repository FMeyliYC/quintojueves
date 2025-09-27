
const readline = require('readline-sync');

let numero;

do {
  const input = readline.question("Ingresa un numero mayor que 0: ");
  numero = parseInt(input);

  if (isNaN(numero) || numero <= 0) {
    console.log("🚫 Entrada invalida. Debes ingresar un número entero mayor que 0.");
  }
} while (isNaN(numero) || numero <= 0);

console.log(`\n✅ Numero valido ingresado: ${numero}.`);