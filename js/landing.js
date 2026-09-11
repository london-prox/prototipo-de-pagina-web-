document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ landing.js cargado correctamente");
    
    // 1. Leer los datos guardados por el admin
    const datosGuardados = localStorage.getItem("datosLanding");
    
    if (datosGuardados) {
        try {
            const datos = JSON.parse(datosGuardados);
            console.log("📦 Datos encontrados:", datos);

            // 2. Cambiar el título principal
            const elTitulo = document.getElementById("heroTitulo");
            if (elTitulo && datos.heroTitulo) {
                elTitulo.innerText = datos.heroTitulo;
                console.log("✅ Título actualizado a:", datos.heroTitulo);
            }

            // 3. Cambiar el subtítulo
            const elSubtitulo = document.getElementById("heroSubtitulo");
            if (elSubtitulo && datos.heroSubtitulo) {
                elSubtitulo.innerText = datos.heroSubtitulo;
            }

            // 4. Cambiar sección nosotros (título)
            const elNosotrosTitulo = document.getElementById("nosotrosTitulo");
            if (elNosotrosTitulo && datos.nosotrosTitulo) {
                elNosotrosTitulo.innerText = datos.nosotrosTitulo;
            }

            // 5. Cambiar sección nosotros (texto)
            const elNosotrosTexto = document.getElementById("nosotrosTexto");
            if (elNosotrosTexto && datos.nosotrosTexto) {
                elNosotrosTexto.innerText = datos.nosotrosTexto;
            }
        } catch (error) {
            console.error("❌ Error al leer los datos:", error);
        }
    } else {
        console.log("ℹ️ No hay datos guardados. Se muestra el texto original del HTML.");
    }
});