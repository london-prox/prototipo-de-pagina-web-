// Guardar cambios
function guardarCambios() {
    const datos = {
        heroTitulo: document.getElementById("inputHeroTitulo").value,
        heroSubtitulo: document.getElementById("inputHeroSubtitulo").value,
        nosotrosTitulo: document.getElementById("inputNosotrosTitulo").value,
        nosotrosTexto: document.getElementById("inputNosotrosTexto").value
    };
    
    localStorage.setItem("datosLanding", JSON.stringify(datos));
    
    // Solo un check verde pequeño
    const msg = document.getElementById("mensajeGuardado");
    if (msg) {
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 2000);
    }
}

// Cargar datos al abrir
window.onload = function() {
    const datos = JSON.parse(localStorage.getItem("datosLanding"));
    if (datos) {
        document.getElementById("inputHeroTitulo").value = datos.heroTitulo || "";
        document.getElementById("inputHeroSubtitulo").value = datos.heroSubtitulo || "";
        document.getElementById("inputNosotrosTitulo").value = datos.nosotrosTitulo || "";
        document.getElementById("inputNosotrosTexto").value = datos.nosotrosTexto || "";
    }
};

function borrarClientes() {
    if (confirm("¿Borrar todo?")) {
        localStorage.clear();
        location.reload();
    }
}