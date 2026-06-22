console.log("Script cargado correctamente");

// Capturar formulario
const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Evento submit ejecutado");

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;
        const telefono = document.getElementById("telefono").value;

        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Mensaje:", mensaje);
        console.log("Mensaje:", telefono);

        const respuesta = document.getElementById("respuesta");

        // Validación
        if (nombre === "" || correo === "" || mensaje === "" || telefono === "") {
            respuesta.textContent = "Todos los campos son obligatorios.";
            return;
        }

        // ENVIAR AL BACKEND
        fetch("http://localhost:3000/guardar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                correo: correo,
                mensaje: mensaje,
                telefono: telefono
            })
        })
            .then(res => res.text())
            .then(data => {
                console.log("Respuesta servidor:", data);
                respuesta.textContent = "Datos guardados en MySQL correctamente";
                formulario.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                respuesta.textContent = "Error al guardar los datos";
            });

    });
}