const readline = require('readline-sync');

let opcion;

do {
  console.log("\n--- MENU DE OPCIONES ---");
  console.log("1. Ver perfil");
  console.log("2. Editar configuracion");
  console.log("3. Ver notificaciones");
  console.log("4. Salir");
  console.log("------------------------");

  const input = readline.question("Selecciona una opcion (1-4): ");
  opcion = parseInt(input);

  switch (opcion) {
    case 1:
      console.log("➡️ Accediendo a tu perfil...");
      break;
    case 2:
      console.log("➡️ Abriendo configuracion...");
      break;
    case 3:
      console.log("➡️ Revisando notificaciones...");
      break;
    case 4:
      console.log("👋 Saliendo del sistema. ¡Hasta luego!");
      break;
    default:
      console.log("🚫 Opcion invalida. Por favor, elige un número del 1 al 4.");
  }
} while (opcion !== 4);