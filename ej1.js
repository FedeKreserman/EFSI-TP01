function formatearNombre(nombre)
{
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function mostrarNombre()
{
    let nombre = document.getElementById("nombre").value;
    let nombreFormateado = formatearNombre(nombre);

    document.getElementById("resultadoNombre").textContent = nombreFormateado;
}

