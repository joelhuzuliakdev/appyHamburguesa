/* ------------- CANTIDAD ---------------- */

/* #### LO QUE TRAE LA HAMBURGUESA #### */

document.querySelector('.contenedorIngredientes').addEventListener('click', function (event) {
    event.preventDefault();

    const target = event.target; // Detecta qué elemento se clickeó
    const totalElement = document.querySelector('.precioTotal'); // Elemento donde se muestra el total
    let total = parseInt(totalElement.textContent.replace('$', '') || 0); // Obtiene el total actual

    // Si el botón "sumar" fue clickeado
    if (target.closest('.sumarProducto')) {
        const cantidadDiv = target.closest('.cantidad');
        const input = cantidadDiv.querySelector('.inputCantidad');
        const precio = parseInt(cantidadDiv.getAttribute('data-precio') || 0); // Obtiene el precio del ingrediente

        input.value = parseInt(input.value || 0) + 1; // Incrementa el valor en 1
        total += precio; // Incrementa el total
    }

    // Si el botón "restar" fue clickeado
    if (target.closest('.restarProducto')) {
        const cantidadDiv = target.closest('.cantidad');
        const input = cantidadDiv.querySelector('.inputCantidad');
        const precio = parseInt(cantidadDiv.getAttribute('data-precio') || 0); // Obtiene el precio del ingrediente

        if (parseInt(input.value || 0) > 0) {
            input.value = parseInt(input.value) - 1; // Decrementa el valor en 1
            total -= precio; // Decrementa el total
        }
    }

    // Actualiza el precio total en la interfaz
    totalElement.textContent = `$${total}`;
});

// CARTEL SWEETALERT

// Obtener referencias a los elementos
const btnComprar = document.getElementById("btnComprar");
const precioTotalElement = document.getElementById("precioTotal");

// Escuchar el clic en el botón "Comprar"
btnComprar.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado del enlace
    
    // Obtener el valor numérico del total (elimina el símbolo "$" y convierte a número)
    const total = parseFloat(precioTotalElement.textContent.replace("$", ""));

    // Validar el total y mostrar alertas correspondientes
    if (total === 0) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El total no puede ser $0. ¡Agrega productos a tu carrito!",
            confirmButtonText: "Aceptar",
            width: "90%",
            position:"center",
        });
    } else if (total > 7000) {
        Swal.fire({
            icon: "success",
            title: "Compra Exitosa",
            text: "¡Tu compra fue realizada con éxito!",
            confirmButtonText: "Aceptar",
            width: "90%",
            position:"center",
        });
    } else {
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "El monto total no cumple con las condiciones para una compra especial.",
            confirmButtonText: "Aceptar",
            width: "90%",
            position:"center",
        });
    }
});
