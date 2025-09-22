// Array para almacenar la lista de amigos
let amigos = [];

// Referencias a elementos del DOM
const inputNombre = document.getElementById('nombreAmigo');
const btnAgregar = document.getElementById('btnAgregar');
const btnSortear = document.getElementById('btnSortear');
const btnLimpiar = document.getElementById('btnLimpiar');
const listaAmigos = document.getElementById('listaAmigos');
const mensajeError = document.getElementById('mensajeError');
const resultadoSection = document.getElementById('resultadoSection');
const listaResultados = document.getElementById('listaResultados');

// Event listeners
inputNombre.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});

inputNombre.addEventListener('input', function() {
    limpiarError();
});

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    
    // Validaciones
    if (!validarNombre(nombre)) {
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el input
    inputNombre.value = '';
    
    // Actualizar la interfaz
    actualizarListaAmigos();
    actualizarEstadoBotones();
    
    // Ocultar la sección de resultados si está visible
    ocultarResultados();
    
    console.log('Amigo agregado:', nombre);
    console.log('Lista actual:', amigos);
}

// Función para validar el nombre ingresado
function validarNombre(nombre) {
    // Verificar que no esté vacío
    if (nombre === '') {
        mostrarError('Por favor, ingresa un nombre válido.');
        return false;
    }
    
    // Verificar que no sea solo espacios
    if (nombre.length === 0) {
        mostrarError('El nombre no puede estar vacío.');
        return false;
    }
    
    // Verificar que no sea demasiado corto
    if (nombre.length < 2) {
        mostrarError('El nombre debe tener al menos 2 caracteres.');
        return false;
    }
    
    // Verificar que no contenga solo números
    if (/^\d+$/.test(nombre)) {
        mostrarError('El nombre no puede contener solo números.');
        return false;
    }
    
    // Verificar que no esté duplicado
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        mostrarError('Este nombre ya está en la lista.');
        return false;
    }
    
    return true;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('show');
    inputNombre.focus();
}

// Función para limpiar mensajes de error
function limpiarError() {
    mensajeError.classList.remove('show');
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    if (amigos.length === 0) {
        listaAmigos.classList.add('empty');
        return;
    }
    
    listaAmigos.classList.remove('empty');
    
    // Agregar cada amigo a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="nombre">${amigo}</span>
            <span class="numero">#${index + 1}</span>
        `;
        listaAmigos.appendChild(li);
    });
}

// Función para actualizar el estado de los botones
function actualizarEstadoBotones() {
    // Habilitar el botón de sortear solo si hay al menos 2 amigos
    btnSortear.disabled = amigos.length < 2;
    
    // Cambiar el texto del botón según la cantidad de amigos
    if (amigos.length === 0) {
        btnSortear.textContent = '🎲 Sortear Amigo Secreto';
    } else if (amigos.length === 1) {
        btnSortear.textContent = '🎲 Agregar más amigos para sortear';
    } else {
        btnSortear.textContent = `🎲 Sortear Amigo Secreto (${amigos.length} participantes)`;
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarError('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }
    
    console.log('Iniciando sorteo con:', amigos);
    
    // Crear una copia del array para el sorteo
    let disponibles = [...amigos];
    let resultado = [];
    
    // Realizar el sorteo
    for (let i = 0; i < amigos.length; i++) {
        const participante = amigos[i];
        
        // Filtrar para que una persona no se saque a sí misma
        let opciones = disponibles.filter(amigo => amigo !== participante);
        
        // Si no hay opciones (último participante y solo queda él mismo)
        if (opciones.length === 0) {
            // Reiniciar el sorteo
            console.log('Reiniciando sorteo para evitar auto-asignación');
            return sortearAmigo();
        }
        
        // Seleccionar aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        const amigoSecreto = opciones[indiceAleatorio];
        
        // Agregar al resultado
        resultado.push({
            participante: participante,
            amigoSecreto: amigoSecreto
        });
        
        // Remover de disponibles
        disponibles = disponibles.filter(amigo => amigo !== amigoSecreto);
    }
    
    console.log('Resultado del sorteo:', resultado);
    
    // Mostrar el resultado
    mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultado) {
    // Limpiar resultados anteriores
    listaResultados.innerHTML = '';
    
    // Agregar cada resultado
    resultado.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="participante">${item.participante}</span>
            <span>→</span>
            <span class="asignado">${item.amigoSecreto}</span>
        `;
        
        // Agregar animación con delay
        setTimeout(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, index * 100);
        
        li.style.opacity = '0';
        li.style.transform = 'translateY(20px)';
        li.style.transition = 'all 0.3s ease';
        
        listaResultados.appendChild(li);
    });
    
    // Mostrar la sección de resultados
    resultadoSection.classList.add('show');
    
    // Scroll suave hacia los resultados
    resultadoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    if (amigos.length === 0) {
        mostrarError('La lista ya está vacía.');
        return;
    }
    
    // Confirmar la acción
    if (confirm('¿Estás seguro de que quieres limpiar toda la lista?')) {
        amigos = [];
        actualizarListaAmigos();
        actualizarEstadoBotones();
        ocultarResultados();
        limpiarError();
        
        console.log('Lista limpiada');
    }
}

// Función para ocultar los resultados
function ocultarResultados() {
    resultadoSection.classList.remove('show');
}

// Función para comenzar un nuevo sorteo
function nuevoSorteo() {
    ocultarResultados();
    
    // Scroll hacia arriba para agregar más amigos
    document.querySelector('.input-section').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // Enfocar el input
    setTimeout(() => {
        inputNombre.focus();
    }, 500);
}

// Funciones de utilidad para debugging
function mostrarEstadoActual() {
    console.log('=== Estado Actual ===');
    console.log('Amigos:', amigos);
    console.log('Cantidad de amigos:', amigos.length);
    console.log('Botón sortear habilitado:', !btnSortear.disabled);
    console.log('====================');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación Amigo Secreto iniciada');
    actualizarListaAmigos();
    actualizarEstadoBotones();
    inputNombre.focus();
});

// Función para generar datos de prueba (solo para desarrollo)
function generarDatosPrueba() {
    const nombresPrueba = ['Ana', 'Carlos', 'María', 'Luis', 'Elena', 'Diego'];
    
    nombresPrueba.forEach(nombre => {
        if (!amigos.includes(nombre)) {
            amigos.push(nombre);
        }
    });
    
    actualizarListaAmigos();
    actualizarEstadoBotones();
    console.log('Datos de prueba generados:', amigos);
}

// Exponer funciones globalmente para testing
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.limpiarLista = limpiarLista;
window.nuevoSorteo = nuevoSorteo;
window.generarDatosPrueba = generarDatosPrueba;
window.mostrarEstadoActual = mostrarEstadoActual;