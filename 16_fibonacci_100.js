let sumaImpares = 0;
let detenerProceso = false;

for (let i = 1; i <= 50; i++) {
  
  if (detenerProceso) {
    break; 
  }

  if (i % 2 !== 0) {
    sumaImpares += i;a
  }
  
  while (sumaImpares > 500) {
    detenerProceso = true;
    break; 
  }
}

console.log("Suma total de impares (hasta que la suma superó 500):", sumaImpares);

