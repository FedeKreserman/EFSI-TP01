function obtenerProductosCaros(productos) {
    return productos.filter(p => p.precio > 50);
}

function mostrarCaros() {
    const listaProductos = [
        { nombre: "Notebook", precio: 1000 },
        { nombre: "Monitor", precio: 200 },
        { nombre: "Teclado", precio: 50 }, 
        { nombre: "Mouse", precio: 25 },   
        { nombre: "Silla Gamer", precio: 150 }
    ];

    const caros = obtenerProductosCaros(listaProductos);

    const ul = document.getElementById("listaResultado");
    ul.innerHTML = ""; 

    caros.forEach(p => {
        const li = document.createElement("li");
        li.innerText = `${p.nombre} - $${p.precio}`;
        ul.appendChild(li);
    });

    if (caros.length === 0) {
        ul.innerText = "No hay productos que superen los $50.";
    }
}