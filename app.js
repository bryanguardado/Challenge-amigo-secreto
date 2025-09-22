// Lista para almacenar los amigos
let amigos = [];

// Referencias a elementos del DOM
const amigoInput = document.getElementById('amigo-input');
const agregarBtn = document.getElementById('agregar-btn');
const listaAmigos = document.getElementById('lista-amigos');
const sortearBtn = document.getElementById('sortear-btn');
const resultadoSection = document.getElementById('resultado');
const resultadoContenido = document.getElementById('resultado-contenido');
const nuevoSorteoBtn = document.getElementById('nuevo-sorteo-btn');

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = amigoInput.value.trim();
    
    // Validaciones
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        amigoInput.value = '';
        return;
    }
    
    // Agregar el nombre a la lista
    amigos.push(nombre);
    amigoInput.value = '';
    
    // Actualizar la interfaz
    actualizarListaAmigos();
    actualizarEstadoSorteo();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'amigo-item';
        li.innerHTML = `
            <span>${amigo}</span>
            <button class="eliminar-btn" onclick="eliminarAmigo(${index})">
                Eliminar
            </button>
        `;
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
    actualizarEstadoSorteo();
}

// Función para actualizar el estado del botón de sorteo
function actualizarEstadoSorteo() {
    sortearBtn.disabled = amigos.length < 2;
}

// Función para realizar el sorteo
function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 participantes para realizar el sorteo.');
        return;
    }
    
    // Crear copias de la lista para el sorteo
    let regaladores = [...amigos];
    let receptores = [...amigos];
    let parejas = [];
    
    // Algoritmo de sorteo
    for (let i = 0; i < regaladores.length; i++) {
        const regalador = regaladores[i];
        
        // Filtrar receptores disponibles (no puede ser él mismo)
        let receptoresDisponibles = receptores.filter(receptor => receptor !== regalador);
        
        // Si no hay receptores disponibles, reiniciar el sorteo
        if (receptoresDisponibles.length === 0) {
            // Reiniciar el proceso si no hay solución
            return sortearAmigoSecreto();
        }
        
        // Seleccionar receptor aleatorio
        const indexReceptor = Math.floor(Math.random() * receptoresDisponibles.length);
        const receptor = receptoresDisponibles[indexReceptor];
        
        // Crear la pareja
        parejas.push({ regalador, receptor });
        
        // Remover el receptor de la lista disponible
        receptores = receptores.filter(r => r !== receptor);
    }
    
    // Mostrar resultados
    mostrarResultados(parejas);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(parejas) {
    resultadoContenido.innerHTML = '';
    
    parejas.forEach(pareja => {
        const div = document.createElement('div');
        div.className = 'pareja';
        div.innerHTML = `
            <strong>${pareja.regalador}</strong> debe regalar a <strong>${pareja.receptor}</strong>
        `;
        resultadoContenido.appendChild(div);
    });
    
    resultadoSection.style.display = 'block';
    
    // Scroll hacia los resultados
    resultadoSection.scrollIntoView({ behavior: 'smooth' });
}

// Función para reiniciar y hacer un nuevo sorteo
function nuevoSorteo() {
    resultadoSection.style.display = 'none';
    resultadoContenido.innerHTML = '';
}

// Event listeners
agregarBtn.addEventListener('click', agregarAmigo);

// Permitir agregar con Enter
amigoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});

sortearBtn.addEventListener('click', sortearAmigoSecreto);
nuevoSorteoBtn.addEventListener('click', nuevoSorteo);

// Inicializar el estado
actualizarEstadoSorteo();