// Función para registrar un usuario
function registrarUsuario(nombre, gremio, password) {
    // Enviar solicitud a la base de datos para registrar el usuario
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            gremio: gremio,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Función para iniciar sesión
function iniciarSesion(nombre, password) {
    // Enviar solicitud a la base de datos para iniciar sesión
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Función para obtener las votaciones
function obtenerVotaciones() {
    // Enviar solicitud a la base de datos para obtener las votaciones
    fetch('/votaciones')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Función para registrar un voto
function registrarVoto(usuarioId, opcionId) {
    // Enviar solicitud a la base de datos para registrar el voto
    fetch('/votar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuarioId: usuarioId,
            opcionId: opcionId
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Eventos para los formularios de registro e inicio de sesión
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const gremio = document.getElementById('gremio').value;
    const password = document.getElementById('password').value;
    registrarUsuario(nombre, gremio, password);
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    iniciarSesion(nombre, password);
});

// Eventos para las votaciones
document.getElementById('votaciones-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
        const usuarioId = // obtener el ID del usuario actual
        const opcionId = // obtener el ID de la opción seleccionada
        registrarVoto(usuarioId, opcionId);
    }
});
