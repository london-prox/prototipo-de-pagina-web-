// 1. Saludar a la persona con el nombre que puso en el formulario
const nombreGuardado = localStorage.getItem("usuarioActual");
const badgeSaludo = document.getElementById("saludoUsuario");

if (nombreGuardado && badgeSaludo) {
    badgeSaludo.textContent = `¡Hola, ${nombreGuardado}! 👋`;
}

// 2. Leer si el Administrador cambió algún texto desde el Dashboard
const datosAdmin = JSON.parse(localStorage.getItem("datosLanding"));

if (datosAdmin) {
    if (datosAdmin.heroTitulo) {
        document.getElementById("heroTitulo").textContent = datosAdmin.heroTitulo;
    }
    if (datosAdmin.heroSubtitulo) {
        document.getElementById("heroSubtitulo").textContent = datosAdmin.heroSubtitulo;
    }
    if (datosAdmin.nosotrosTitulo) {
        document.getElementById("nosotrosTitulo").textContent = datosAdmin.nosotrosTitulo;
    }
    if (datosAdmin.nosotrosTexto) {
        document.getElementById("nosotrosTexto").textContent = datosAdmin.nosotrosTexto;
    }
}