const formularioLogin = document.getElementById("form-login");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = {
            correo: document.getElementById("correo").value,
            password: document.getElementById("password").value
        };

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        .then(response => {
            // Evaluamos la respuesta del servidor antes de convertir a JSON
            if (response.ok) {
                return response.json();
            } else {
                // Si el servidor responde con error (como el 401), forzamos ir al .catch o manejamos el error
                return response.json().then(err => { throw new Error(err.mensaje); });
            }
        })
        .then(data => {
            console.log("Respuesta exitosa del servidor:", data); 

            // 💡 Validamos la frase exacta que configuraste en tu backend
            if (data.mensaje === "Login correcto") {
                alert("¡Login correcto!");
                
                // Guardamos la sesión
                sessionStorage.setItem("usuario", JSON.stringify(usuario));
                
                // Te manda directo a la página de administración
                window.location.href = "admin-productos.html";
            }
        })
        .catch(error => {
            // Muestra el mensaje real que viene desde el backend ("Correo o contraseña incorrectos")
            alert("Error: " + error.message);
            console.error("Detalle del fallo:", error);
        });
    });
}
