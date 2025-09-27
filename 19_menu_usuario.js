let a = 0;
let b = 1;
let serie = [a, b];

console.log("Serie de Fibonacci (hasta que un número supere 100):");

while (b <= 100) {
  let siguiente = a + b;
  serie.push(siguiente);
  a = b;
  b = siguiente;
}

console.log(serie);