const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que la página se recargue

    // 1. Obtener los datos que escribió la persona
    const usuario = {
        nombre: document.getElementById("nombre").value,
        numero: document.getElementById("numero").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value,
        fecha: new Date().toLocaleDateString()
    };

    // 2. Guardar la lista de clientes en la memoria para que el Dashboard los pueda ver
    const clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];
    clientesGuardados.push(usuario);
    localStorage.setItem("clientes", JSON.stringify(clientesGuardados));

    // Guardar también el nombre del usuario actual para saludarlo en la landing
    localStorage.setItem("usuarioActual", usuario.nombre);

    // 3. Redirigir a la Landing Page
    window.location.href = "landing.html";
});