function promedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma / numeros.length;
}

function mostrarPromedio() {
  let numeros = [10, 8, 6, 9];

  let resultadoPromedio = promedio(numeros);

  document.getElementById("resultadoPromedio").innerHTML =
    "Promedio: " + resultadoPromedio;
}