const formularioLogin = document.getElementById("form-login");

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
    .then(response => response.json())
    .then(data => {
        // 1. Esto te mostrará en la consola todo lo que responde tu servidor
        console.log("Respuesta del servidor:", data); 
        
        alert(data.mensaje);

        // 2. Guardamos la sesión
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        
        // 3. Te manda directo a la página de administración
        window.location.href = "admin-productos.html";
    })
    .catch(error => {
        alert("Error en login");
        console.error(error);
    });
});