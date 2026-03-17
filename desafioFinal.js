
let usuarios = [
  { id: 1, nombre: "Ana", edad: 20 },
  { id: 2, nombre: "Juan", edad: 15 },
  { id: 3, nombre: "Pedro", edad: 30 }
];


function obtenerUsuarios() {
  return usuarios;
}


function obtenerUsuarioPorId(id) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === id) {
      return usuarios[i];
    }
  }
  return null;
}


function obtenerMayores() {
  return usuarios.filter(u => u.edad >= 18);
}


function crearUsuario(nombre, edad) {
  let nuevoId = usuarios.length + 1;

  let nuevoUsuario = {
    id: nuevoId,
    nombre: nombre,
    edad: edad
  };

  usuarios[usuarios.length] = nuevoUsuario;
}



function mostrarTodos() {
  let lista = obtenerUsuarios();
  let texto = "";

  for (let i = 0; i < lista.length; i++) {
    texto += lista[i].id + " - " + lista[i].nombre + " (" + lista[i].edad + ")<br>";
  }

  document.getElementById("resultado").innerHTML = texto;
}

function mostrarPorId() {
  let id = parseInt(document.getElementById("inputId").value);

  let usuario = obtenerUsuarioPorId(id);

  let resultado = document.getElementById("resultado");

  if (usuario) {
    resultado.innerHTML = usuario.nombre + " (" + usuario.edad + ")";
  } else {
    resultado.innerHTML = "No encontrado";
  }
}

function mostrarMayores() {
  let lista = obtenerMayores();
  let texto = "";

  for (let i = 0; i < lista.length; i++) {
    texto += lista[i].nombre + " (" + lista[i].edad + ")<br>";
  }

  document.getElementById("resultado").innerHTML = texto;
}

function agregarUsuario() {
  let nombre = document.getElementById("inputNombre").value;
  let edad = parseInt(document.getElementById("inputEdad").value);

  crearUsuario(nombre, edad);

  mostrarTodos();
}