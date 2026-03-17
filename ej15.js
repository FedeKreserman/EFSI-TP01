function copiarYExtender() {
    const producto = {
        nombre: "Notebook",
        precio: 1000
    };

    const productoConStock = {
        ...producto,
        stock: 5
    };

    document.getElementById("original").innerText = 
        "Original: " + JSON.stringify(producto);
        
    document.getElementById("copia").innerText = 
        "Copia con Stock: " + JSON.stringify(productoConStock);

    console.log("Objeto Original:", producto);
    console.log("Nuevo Objeto (Copia):", productoConStock);
}