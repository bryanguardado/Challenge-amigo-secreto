# 🎁 Challenge Amigo Secreto - Alura Latam

Una aplicación web interactiva para organizar intercambios de regalos entre amigos de forma fácil y divertida.

## 📋 Descripción

Este proyecto es parte del challenge de Alura Latam y consiste en una aplicación que permite:
- Agregar participantes para un intercambio de regalos
- Realizar un sorteo aleatorio para asignar amigos secretos
- Mostrar los resultados del sorteo de manera clara
- Validar entradas para evitar errores comunes

## 🚀 Características

### ✨ Funcionalidades Principales
- **Agregar Participantes**: Interfaz intuitiva para añadir nombres a la lista
- **Validación de Datos**: 
  - No permite nombres vacíos o muy cortos
  - Evita duplicados
  - Verifica que no sean solo números
- **Sorteo Inteligente**: Algoritmo que garantiza que nadie se saque a sí mismo
- **Resultados Claros**: Muestra quién le toca regalar a quién
- **Gestión de Lista**: Opciones para limpiar y reiniciar

### 🎨 Diseño
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Moderno**: Diseño atractivo con gradientes y animaciones
- **Accesible**: Interfaz intuitiva y fácil de usar
- **Animaciones**: Transiciones suaves para mejor experiencia de usuario

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y CSS Grid
- **JavaScript ES6+**: Lógica de aplicación y manipulación del DOM
- **Responsive Design**: Compatible con móviles y escritorio

## 📂 Estructura del Proyecto

```
Challenge-amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js             # Lógica de JavaScript
└── README.md          # Documentación
```

## 🎮 Cómo Usar

1. **Abrir la aplicación**: Abre `index.html` en tu navegador web
2. **Agregar participantes**: 
   - Escribe el nombre de un amigo en el campo de texto
   - Presiona "Añadir" o la tecla Enter
   - Repite para todos los participantes
3. **Realizar sorteo**: 
   - Necesitas mínimo 2 participantes
   - Haz clic en "Sortear Amigo Secreto"
4. **Ver resultados**: La aplicación mostrará quién le toca regalar a quién
5. **Nuevo sorteo**: Puedes hacer un nuevo sorteo o agregar más participantes

## 🔧 Instalación y Ejecución

### Opción 1: Descarga Directa
1. Descarga o clona este repositorio
2. Abre `index.html` en tu navegador favorito
3. ¡Listo para usar!

### Opción 2: Servidor Local
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Luego abre http://localhost:8000 en tu navegador
```

## 📱 Compatibilidad

- ✅ Chrome (70+)
- ✅ Firefox (60+)
- ✅ Safari (12+)
- ✅ Edge (79+)
- ✅ Dispositivos móviles iOS y Android

## 🎯 Funcionalidades Técnicas

### Validaciones Implementadas
- **Nombres vacíos**: No permite agregar nombres en blanco
- **Nombres duplicados**: Evita agregar el mismo nombre dos veces
- **Nombres muy cortos**: Requiere mínimo 2 caracteres
- **Solo números**: No permite nombres que sean únicamente números
- **Mínimo de participantes**: Requiere al menos 2 personas para sortear

### Algoritmo de Sorteo
- Garantiza que cada persona tenga un amigo secreto diferente
- Evita que alguien se saque a sí mismo
- Reinicia automáticamente si se produce una situación imposible
- Usa aleatoriedad verdadera para resultados justos

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Gradiente azul-púrpura (#667eea → #764ba2)
- **Secundario**: Gradiente naranja-rosa (#ff6b6b → #feca57)
- **Éxito**: Verde (#2ecc71)
- **Error**: Rojo (#e74c3c)

### Animaciones
- Aparición suave de elementos (fadeIn)
- Transiciones en botones y hover effects
- Animación escalonada en resultados
- Scroll suave entre secciones

## 🧪 Testing

La aplicación incluye funciones de debugging:

```javascript
// En la consola del navegador:
generarDatosPrueba();    // Agrega nombres de prueba
mostrarEstadoActual();   // Muestra el estado actual
```

## 🤝 Contribuciones

Este es un proyecto educativo de Alura Latam. Las mejoras y sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👨‍💻 Autor

Proyecto desarrollado como parte del Challenge de **Alura Latam**.

## 🎯 Objetivos de Aprendizaje

Este proyecto ayuda a practicar:
- Manipulación del DOM con JavaScript
- Validación de formularios
- Algoritmos de aleatorización
- Diseño responsive
- Experiencia de usuario (UX)
- Programación orientada a eventos
- Debugging y testing

---

¡Disfruta organizando tus intercambios de regalos! 🎁