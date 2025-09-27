const readline = require('readline-sync');

const USUARIO_CORRECTO = "admin";
const CLAVE_CORRECTA = "1234";
const MAX_INTENTOS = 3;

let intentos = 0;
let loginExitoso = false;

while (intentos < MAX_INTENTOS && !loginExitoso) {
  console.log(`\n--- Intento ${intentos + 1} de ${MAX_INTENTOS} ---`);
  
  const usuario = readline.question("Usuario: ");
  const clave = readline.question("Clave: ");
  
  if (usuario === USUARIO_CORRECTO && clave === CLAVE_CORRECTA) {
    loginExitoso = true;
    console.log("\n¡Login Exitoso! Bienvenido.");
  } else {
    intentos++;
    console.log("Usuario o clave incorrectos.");
  }
}

if (!loginExitoso) {
  console.log("\nDemasiados intentos fallidos. Cuenta bloqueada temporalmente.");
}