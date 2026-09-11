// =========================================
// LANDING PAGE - CARGA DINÁMICA
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    cargarContenidoDinamico();
    actualizarSaludo();
});

function cargarContenidoDinamico() {
    const contenido = JSON.parse(localStorage.getItem('landing_iHope')) || {};
    
    // Actualizar título del hero
    const heroTitulo = document.getElementById('heroTitulo');
    if (heroTitulo && contenido.heroTitulo) {
        heroTitulo.textContent = contenido.heroTitulo;
    }
    
    // Actualizar subtítulo del hero
    const heroSubtitulo = document.getElementById('heroSubtitulo');
    if (heroSubtitulo && contenido.heroSubtitulo) {
        heroSubtitulo.textContent = contenido.heroSubtitulo;
    }
    
    // Actualizar sección Nosotros
    const nosotrosTitulo = document.getElementById('nosotrosTitulo');
    if (nosotrosTitulo && contenido.nosotrosTitulo) {
        nosotrosTitulo.textContent = contenido.nosotrosTitulo;
    }
    
    const nosotrosTexto = document.getElementById('nosotrosTexto');
    if (nosotrosTexto && contenido.nosotrosTexto) {
        nosotrosTexto.textContent = contenido.nosotrosTexto;
    }
}

function actualizarSaludo() {
    const saludoElement = document.getElementById('saludoUsuario');
    const clientes = JSON.parse(localStorage.getItem('clientes_iHope')) || [];
    
    if (saludoElement) {
        if (clientes.length > 0) {
            const ultimoCliente = clientes[clientes.length - 1];
            saludoElement.textContent = `Hola ${ultimoCliente.nombre.split(' ')[0]} 👋`;
        } else {
            saludoElement.textContent = 'Hola 👋';
        }
    }
}