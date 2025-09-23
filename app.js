// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const amigo = document.getElementById('amigo').value;

  // Validar la entrada
  if (amigo.trim() === '') {
    alert('Por favor, ingrese un nombre válido.');
    return;
  }

  // Agregar el amigo al array
  amigos.push(amigo);

  // Limpiar el campo de entrada
  document.getElementById('amigo').value = '';

  // Actualizar la lista de amigos
  actualizarListaAmigos();
}

// Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
  // Obtener el elemento de la lista
  const listaAmigos = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  listaAmigos.innerHTML = '';

  // Iterar sobre el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento de lista (<li>)
    const elemento = document.createElement('li');

    // Establecer el texto del elemento con el nombre del amigo
    elemento.textContent = amigos[i];

    // Agregar el elemento a la lista
    listaAmigos.appendChild(elemento);
  }
}

// Implementa una función para sortear los amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay amigos en la lista.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById('resultado');
  resultado.textContent = 'El amigo secreto es: ' + amigoSorteado;
}