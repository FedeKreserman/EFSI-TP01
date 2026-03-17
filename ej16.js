function buscarProducto(productos, nombre) {
    return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

function realizarBusqueda() {
    const listaProductos = [
        { nombre: "Notebook", precio: 1000 },
        { nombre: "Monitor", precio: 200 },
        { nombre: "Teclado", precio: 50 },
        { nombre: "Mouse", precio: 25 }
    ];

    const nombreABuscar = document.getElementById("inputBusqueda").value;

    const encontrado = buscarProducto(listaProductos, nombreABuscar);

    const display = document.getElementById("resultado");
    if (encontrado) {
        display.innerText = `Encontrado: ${encontrado.nombre} - Precio: $${encontrado.precio}`;
    } else {
        display.innerText = "Producto no encontrado.";
    }
}