function obtenerMayores(usuarios) {
  return usuarios.filter(function(usuario) {
    return usuario.edad >= 18;
  });
}

function mostrarMayores() {
  const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
  ];

  let resultadoArray = obtenerMayores(usuarios);

  let resultado = document.getElementById("resultadoMayores");

  let texto = "";

  for (let i = 0; i < resultadoArray.length; i++) {
    texto += resultadoArray[i].nombre + " (" + resultadoArray[i].edad + ") ";
  }

  resultado.innerHTML = texto;
}