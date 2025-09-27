
const readline = require("readline-sync");

// Funciones -------------------------------

// 1️⃣ Sumar elementos (¡Perfecto!)
const sumarElementos = (arr) => arr.reduce((acc, n) => acc + n, 0);


// 2️⃣ Mayor y menor (¡Perfecto! Alternativa: Math.min/max.apply)
const obtenerMayorMenor = (arr) => {
  if (arr.length === 0) return { mayor: undefined, menor: undefined };
  // Usamos los métodos nativos para mayor eficiencia y claridad
  const mayor = Math.max(...arr); 
  const menor = Math.min(...arr);
  return { mayor, menor };
};


// 3️⃣ Contar pares (¡Perfecto!)
const contarPares = (arr) => arr.filter(n => n % 2 === 0).length;

// 4️⃣ Ordenar (burbuja) (¡Perfecto! Aunque para producción se usaría arr.slice().sort())
const ordenarArray = (arr) => {
  let copia = [...arr];
  for (let i = 0; i < copia.length; i++) {
    // Optimización: el elemento más grande 'burbujea' a la derecha
    for (let j = 0; j < copia.length - 1 - i; j++) { 
      if (copia[j] > copia[j + 1]) {
        [copia[j], copia[j + 1]] = [copia[j + 1], copia[j]]; // Intercambio con desestructuración
      }
    }
  }
  return copia;
};


// 5️⃣ Invertir array (¡Perfecto! Alternativa: return [...arr].reverse())
const invertirArray = (arr) => {
  // Versión más concisa y idiomática en JS
  return [...arr].reverse();
};


// 6️⃣ Sumar positivos (¡Perfecto!)
const sumarPositivos = (arr) => arr.filter(n => n > 0).reduce((acc, n) => acc + n, 0);


// 7️⃣ Primer múltiplo de 5 (¡Perfecto!)
const primerMultiploDe5 = (arr) => arr.find(n => n % 5 === 0);


// Lógica Principal -------------------------


let cantidad = 0;
while (cantidad <= 0 || isNaN(cantidad)) {
  cantidad = readline.questionInt("Define tamano del array (entero positivo): ");
  if (cantidad <= 0 || isNaN(cantidad)) {
    console.log("Por favor, ingresa un número entero positivo.");
  }
}

// Crear un array vacío
let numeros = [];

// Pedir los números uno por uno (Usa la función de readline-sync)
for (let i = 0; i < cantidad; i++) {
  let num = readline.questionInt(`Ingresa el numero ${i + 1}: `);
  numeros.push(num);
}



// ------------------------------------------

console.log("\n📊 Resultados:\n");
console.log("Array base:", numeros,"\n");
console.log("1) Suma total:", sumarElementos(numeros));
// Se verifica si el array tiene elementos antes de llamar
if (numeros.length > 0) {
  console.log("2) Mayor y menor:", obtenerMayorMenor(numeros));
} else {
  console.log("2) Mayor y menor: Array vacío, no hay valores.");
}
console.log("3) Cantidad de pares:", contarPares(numeros));
console.log("4) Ordenado:", ordenarArray(numeros));
console.log("6) Invertido:", invertirArray(numeros));
console.log("8) Suma de positivos:", sumarPositivos(numeros));
console.log("9) Primer múltiplo de 5:", primerMultiploDe5(numeros));