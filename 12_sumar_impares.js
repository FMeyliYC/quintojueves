const readline = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinanza = 0;
let intentos = 0;

console.log("Adivina el número secreto (entre 1 y 10).");

while (adivinanza !== numeroSecreto) {
  intentos++;
  const input = readline.question(`Intento #${intentos}: Ingresa tu adivinanza: `);
  adivinanza = parseInt(input);

  if (isNaN(adivinanza)) {
    console.log("🚨 Por favor, ingresa un número válido.");
    continue;
  }

  if (adivinanza < numeroSecreto) {
    console.log("❌ ¡Muy bajo! Intenta de nuevo.");
  } else if (adivinanza > numeroSecreto) {
    console.log("❌ ¡Muy alto! Intenta de nuevo.");
  }
}

console.log(`\n🎉 ¡Correcto! El número secreto era ${numeroSecreto}.`);
console.log(`Lo adivinaste en ${intentos} intentos.`);