function sumarArray(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}

function calcularSuma() {

    let texto = document.getElementById("inputNumeros").value;

    let arrayNumeros = texto.split(',').map(Number);

    let resultado = sumarArray(arrayNumeros);

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}