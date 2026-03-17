function calcularTotal(precios) {
  let total = 0;

  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }

  return total;
}

function calcular() {
  let texto = document.getElementById("inputPrecios").value;

  let arrayPrecios = texto.split(",").map(Number);

  let resultado = calcularTotal(arrayPrecios);

  document.getElementById("resultado").innerText = "Total: " + resultado;
}