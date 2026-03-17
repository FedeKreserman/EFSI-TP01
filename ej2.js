function contarLetras(texto) {
    return texto.split('').length;
}

function mostrarCantidad() {
    let texto = document.getElementById("inputTexto").value;

    
    let cantidad = contarLetras(texto);

    document.getElementById("resultado").innerText = "Cantidad de letras: " + cantidad;
}