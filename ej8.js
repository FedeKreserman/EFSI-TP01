const usuario = {
  nombre: "Ana",
  edad: 20,
  activo: false
};


function descripcionUsuario() {

    let mensaje = usuario.nombre + " tiene " + usuario.edad + " años";

    return mensaje;
}

function mostrarDescripcion() {
    let resultado = descripcionUsuario();

    document.getElementById("resultado").innerText = resultado;
}