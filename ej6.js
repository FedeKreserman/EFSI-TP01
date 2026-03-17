function mayorNumero(numeros) {
    let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

function calcularMayor() {
    let texto = document.getElementById("inputNumeros").value;

    let arrayNumeros = texto.split(',').map(Number);


    let resultado = mayorNumero(arrayNumeros);

    document.getElementById("resultado").innerText = "Mayor: " + resultado;
}