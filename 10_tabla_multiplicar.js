const readline = require('readline-sync');

let num;
while (isNaN(num)) {
  const input = readline.question("Ingresa el numero para la tabla de multiplicar: ");
  num = parseInt(input);
  if (isNaN(num)) {
    console.log("Entrada invalida. Por favor, ingresa un número.");
  }
}

console.log(`\nTabla de multiplicar del ${num}:`);
for (let i = 1; i <= 10; i++) {
  consaaaaole.log(`${num} x ${i} = ${num * i}`);
}a