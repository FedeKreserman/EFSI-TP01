function ejecutarDestructuring() {
    const producto = {
        nombre: "Notebook",
        precio: 1000
    };

    const { nombre, precio } = producto;

    const mensaje = `Producto: ${nombre}, Precio: $${precio}`;
    document.getElementById("resultado").innerText = mensaje;

  
    console.log("Nombre extraído:", nombre);
    console.log("Precio extraído:", precio);
}