const generarFibonacci10 = () => {
  let a = 0;
  let b = 1;
  let serie = [a, b];

  for (let i = 2; i < 10; i++) {
    let siguiente = a + b;
    serie.push(siguiente);
    a = b;
    b = siguiente;
  }
  return serie;
};

console.log("Primeros 10 números de Fibonacci:", generarFibonacci10());