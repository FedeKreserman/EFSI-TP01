function obtenerPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

function mostrarPares() {
    let texto = document.getElementById("inputNumeros").value;

    let arrayNumeros = texto.split(',').map(Number);

    let resultado = obtenerPares(arrayNumeros);

    document.getElementById("resultado").innerText = "Pares: " + resultado;
}