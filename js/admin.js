// ============================================
// ADMIN.JS — Lógica del Panel de Administración
// ============================================

// Contenido por defecto de la landing
const DEFAULTS = {
    heroTitulo: "Realza Tu Belleza y Estilo Único",
    heroSubtitulo: "Descubre los mejores productos y tratamientos de belleza pensados exclusivamente para ti.",
    nosotrosTitulo: "Nuestra Historia",
    nosotrosTexto: "Somos una marca apasionada por resaltar la belleza natural de cada persona. Con años de experiencia, ofrecemos productos y servicios de la más alta calidad."
};

// ── Al cargar la página ──────────────────────
window.onload = function () {
    cargarTablaClientes();
    cargarEditorContenido();
};

// ── TABLA DE CLIENTES ────────────────────────
function cargarTablaClientes() {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const tbody = document.getElementById("tablaBody");
    const sinClientes = document.getElementById("sinClientes");
    const totalEl = document.getElementById("totalClientes");
    const ultimoEl = document.getElementById("ultimoCliente");

    totalEl.textContent = clientes.length;

    if (clientes.length === 0) {
        sinClientes.style.display = "block";
        tbody.innerHTML = "";
        ultimoEl.textContent = "—";
        return;
    }

    sinClientes.style.display = "none";
    ultimoEl.textContent = clientes[clientes.length - 1].nombre;

    tbody.innerHTML = "";
    clientes.forEach(function (cliente, index) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${cliente.nombre || "—"}</td>
            <td>${cliente.email || "—"}</td>
            <td>${cliente.telefono || "—"}</td>
        `;
        tbody.appendChild(fila);
    });
}

function borrarClientes() {
    const confirmar = confirm("¿Seguro que quieres borrar TODOS los clientes? Esta acción no se puede deshacer.");
    if (confirmar) {
        localStorage.removeItem("clientes");
        localStorage.removeItem("usuarioActual");
        cargarTablaClientes();
    }
}

// ── EDITOR DE CONTENIDO ──────────────────────
function cargarEditorContenido() {
    const datos = JSON.parse(localStorage.getItem("datosLanding")) || DEFAULTS;

    document.getElementById("inputHeroTitulo").value = datos.heroTitulo || DEFAULTS.heroTitulo;
    document.getElementById("inputHeroSubtitulo").value = datos.heroSubtitulo || DEFAULTS.heroSubtitulo;
    document.getElementById("inputNosotrosTitulo").value = datos.nosotrosTitulo || DEFAULTS.nosotrosTitulo;
    document.getElementById("inputNosotrosTexto").value = datos.nosotrosTexto || DEFAULTS.nosotrosTexto;
}

function guardarCambios() {
    const datos = {
        heroTitulo: document.getElementById("inputHeroTitulo").value,
        heroSubtitulo: document.getElementById("inputHeroSubtitulo").value,
        nosotrosTitulo: document.getElementById("inputNosotrosTitulo").value,
        nosotrosTexto: document.getElementById("inputNosotrosTexto").value
    };

    localStorage.setItem("datosLanding", JSON.stringify(datos));

    // Mostrar mensaje de éxito por 3 segundos
    const msg = document.getElementById("mensajeGuardado");
    msg.style.display = "block";
    setTimeout(function () {
        msg.style.display = "none";
    }, 3000);
}

function resetearContenido() {
    const confirmar = confirm("¿Restaurar el contenido original por defecto?");
    if (confirmar) {
        localStorage.setItem("datosLanding", JSON.stringify(DEFAULTS));
        cargarEditorContenido();
    }
}