// =========================================
// ADMIN PANEL - FUNCIONALIDAD COMPLETA
// =========================================

// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    cargarClientes();
    cargarContenidoLanding();
    actualizarEstadisticas();
});

// =========================================
// GESTIÓN DE CLIENTES
// =========================================

function cargarClientes() {
    const clientes = JSON.parse(localStorage.getItem('clientes_iHope')) || [];
    const tablaBody = document.getElementById('tablaBody');
    const sinClientes = document.getElementById('sinClientes');
    
    if (!tablaBody) return;
    
    tablaBody.innerHTML = '';
    
    if (clientes.length === 0) {
        if (sinClientes) sinClientes.style.display = 'block';
        return;
    }
    
    if (sinClientes) sinClientes.style.display = 'none';
    
    clientes.forEach((cliente, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${cliente.nombre || '—'}</td>
            <td>${cliente.email || '—'}</td>
            <td>${cliente.telefono || '—'}</td>
        `;
        tablaBody.appendChild(row);
    });
}

function borrarClientes() {
    if (confirm('¿Estás seguro de borrar todos los clientes? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('clientes_iHope');
        cargarClientes();
        actualizarEstadisticas();
        alert('✅ Todos los clientes fueron eliminados');
    }
}

// =========================================
// ESTADÍSTICAS
// =========================================

function actualizarEstadisticas() {
    const clientes = JSON.parse(localStorage.getItem('clientes_iHope')) || [];
    
    // Total de clientes
    const totalElement = document.getElementById('totalClientes');
    if (totalElement) {
        totalElement.textContent = clientes.length;
    }
    
    // Último registro
    const ultimoElement = document.getElementById('ultimoCliente');
    if (ultimoElement) {
        if (clientes.length > 0) {
            const ultimo = clientes[clientes.length - 1];
            ultimoElement.textContent = ultimo.nombre.split(' ')[0]; // Primer nombre
        } else {
            ultimoElement.textContent = '—';
        }
    }
}

// =========================================
// EDITOR DE CONTENIDO LANDING
// =========================================

function cargarContenidoLanding() {
    const contenido = JSON.parse(localStorage.getItem('landing_iHope')) || {};
    
    // Cargar valores en los inputs
    const inputHeroTitulo = document.getElementById('inputHeroTitulo');
    const inputHeroSubtitulo = document.getElementById('inputHeroSubtitulo');
    const inputNosotrosTitulo = document.getElementById('inputNosotrosTitulo');
    const inputNosotrosTexto = document.getElementById('inputNosotrosTexto');
    
    if (inputHeroTitulo) inputHeroTitulo.value = contenido.heroTitulo || 'IHOPE WATCH SERIES X';
    if (inputHeroSubtitulo) inputHeroSubtitulo.value = contenido.heroSubtitulo || 'El reloj inteligente que redefine el lujo. Diseño minimalista, tecnología de vanguardia.';
    if (inputNosotrosTitulo) inputNosotrosTitulo.value = contenido.nosotrosTitulo || 'Diseño que Inspira';
    if (inputNosotrosTexto) inputNosotrosTexto.value = contenido.nosotrosTexto || 'Cada reloj iHope es una obra de arte. Combinamos materiales premium con tecnología de punta para crear piezas únicas que definen tu estilo.';
}

function guardarCambios() {
    const contenido = {
        heroTitulo: document.getElementById('inputHeroTitulo')?.value || '',
        heroSubtitulo: document.getElementById('inputHeroSubtitulo')?.value || '',
        nosotrosTitulo: document.getElementById('inputNosotrosTitulo')?.value || '',
        nosotrosTexto: document.getElementById('inputNosotrosTexto')?.value || ''
    };
    
    localStorage.setItem('landing_iHope', JSON.stringify(contenido));
    
    // Mostrar mensaje de éxito
    const mensaje = document.getElementById('mensajeGuardado');
    if (mensaje) {
        mensaje.style.display = 'block';
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 3000);
    } else {
        alert('✅ ¡Cambios guardados exitosamente!');
    }
    
    // Actualizar la landing page
    actualizarLandingPage();
}

function resetearContenido() {
    if (confirm('¿Restaurar el contenido predeterminado?')) {
        const contenidoDefault = {
            heroTitulo: 'IHOPE WATCH SERIES X',
            heroSubtitulo: 'El reloj inteligente que redefine el lujo. Diseño minimalista, tecnología de vanguardia.',
            nosotrosTitulo: 'Diseño que Inspira',
            nosotrosTexto: 'Cada reloj iHope es una obra de arte. Combinamos materiales premium con tecnología de punta para crear piezas únicas que definen tu estilo.'
        };
        
        localStorage.setItem('landing_iHope', JSON.stringify(contenidoDefault));
        cargarContenidoLanding();
        actualizarLandingPage();
        alert('✅ Contenido restaurado a valores predeterminados');
    }
}

function actualizarLandingPage() {
    const contenido = JSON.parse(localStorage.getItem('landing_iHope')) || {};
    
    // Actualizar elementos en la landing page (si existen)
    const heroTitulo = document.getElementById('heroTitulo');
    const heroSubtitulo = document.getElementById('heroSubtitulo');
    const nosotrosTitulo = document.getElementById('nosotrosTitulo');
    const nosotrosTexto = document.getElementById('nosotrosTexto');
    
    if (heroTitulo && contenido.heroTitulo) heroTitulo.textContent = contenido.heroTitulo;
    if (heroSubtitulo && contenido.heroSubtitulo) heroSubtitulo.textContent = contenido.heroSubtitulo;
    if (nosotrosTitulo && contenido.nosotrosTitulo) nosotrosTitulo.textContent = contenido.nosotrosTitulo;
    if (nosotrosTexto && contenido.nosotrosTexto) nosotrosTexto.textContent = contenido.nosotrosTexto;
}