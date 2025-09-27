const readline = require('readline-sync');

const buscarElemento = (nombres, nombreBuscado) => {
  const indice = nombres.indexOf(nombreBuscado);
  if (indice !== -1) {
    return `"${nombreBuscado}" se encuentra en la posición: ${indice}`;
  } else {
    return `"${nombreBuscado}" no se encuentra en la lista.`;
  }
};

const nombres = ["Ana", "Beto", "Carlos", "Diana", "Elena"];
console.log("Lista de nombres:", nombres);
const nombre = readline.question("Ingresa el nombre a buscar: ");

console.log(buscarElemento(nombres, nombre));