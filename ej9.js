function activarUsuario(usuario) {
  usuario.activo = true;
}

function mostrarUsuario() {
  let usuario = {
    nombre: "Fede",
    activo: false
  };

  activarUsuario(usuario);

  let resultado = document.getElementById("resultadoUsuario");

  resultado.textContent = "Nombre: " + usuario.nombre + " | Activo: " + usuario.activo;
}