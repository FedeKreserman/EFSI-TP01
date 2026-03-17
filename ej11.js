function obtenerNombres(usuarios) {
  let nombres = [];

  for (let i = 0; i < usuarios.length; i++) {
    nombres[i] = usuarios[i].nombre;
  }

  return nombres;
}

function mostrarNombres() {
  const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
  ];

  let resultadoArray = obtenerNombres(usuarios);

  let resultado = document.getElementById("resultadoNombres");

  resultado.textContent = resultadoArray.join(", ");
}