 function validarPassword(password) {
  let tieneNumero = false;


  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      tieneNumero = true;
    }
  }


  if (password.length >= 8 && tieneNumero) {
    return true;
  } else {
    return false;
  }
}
function mostrarValidacion() {
  let password = document.getElementById("password").value;

  let esValida = validarPassword(password);

  let resultado = document.getElementById("resultadoPassword");

  if (esValida) {
    resultado.textContent = "Contraseña válida";
  } else {
    resultado.textContent = "Mínimo 8 caracteres y al menos un número";
  }
}