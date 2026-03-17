function sumarEdades(usuarios) {
  return usuarios.reduce(function(total, usuario) {
    return total + usuario.edad;
  }, 0);
}

function mostrarSumaEdades() {
  const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
  ];

  let suma = sumarEdades(usuarios);

  let resultado = document.getElementById("resultadoEdades");

  resultado.innerHTML = "Suma total de edades: " + suma;
}