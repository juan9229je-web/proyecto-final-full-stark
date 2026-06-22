const usuario = localStorage.getItem("usuario");

if (!usuario) {
    alert("Acceso denegado. Por favor, inicia sesión.");
    window.location.href = "login.html";
}