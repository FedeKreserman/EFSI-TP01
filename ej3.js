



function maximo(a, b, c) {
  let mayor = a;

  if (b > mayor) {
    mayor = b;
  }

  if (c > mayor) {
    mayor = c;
  }

  return mayor;
}

function mostrarMaximo() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let resultado = maximo(a, b, c);

  document.getElementById("resultadoMaximo").textContent = "El mayor es: " + resultado;
}
