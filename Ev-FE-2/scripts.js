const servicios = [
    {
        nombre: "Consultas Médicas",
        precio: "$10000",
        descripcion: "Consulta de salud básicas para tu mascota.",
        imagen: "img/perro.jpg"
    },
    {
        nombre: "Cirugías",
        precio: "$100000",
        descripcion: "Operaciones intrusivas y delicadas realizadas por profesionales.",
        imagen: "img/gato2.webp"
    },
    {
        nombre: "Vacunaciones",
        precio: "$5000",
        descripcion: "Pon tu mascota al dia con sus vacunas.",
        imagen: "img/gato.jpg"
    }
];


function mostrarServicios() {
    const contenedor = document.getElementById('contenedor-servicios');
    contenedor.innerHTML = ""; 

    servicios.forEach(servicio => {
        const card = document.createElement('div');
        card.className = 'servicio-card';
        card.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <h3>${servicio.nombre}</h3>
            <p><strong>Precio:</strong> ${servicio.precio}</p>
            <p>${servicio.descripcion}</p>
        `;
        contenedor.appendChild(card);
    });
}

function validarFormulario(evento) {
    evento.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const email = document.getElementById('email').value.trim();
    const consulta = document.getElementById('consulta').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (nombre === "" || celular === "" || email === "" || consulta === "") {
        alert("Todos los campos marcados como obligatorios deben ser completados.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

    if (isNaN(celular)) {
        alert("El campo celular debe contener solo números.");
        return;
    }

    
    mostrarMensajeExito();
    limpiarFormulario();
}


function mostrarMensajeExito() {
    const mensaje = document.getElementById('mensaje-exito');
    mensaje.style.display = 'block';
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000); 
}


function limpiarFormulario() {
    document.getElementById('formulario-contacto').reset();
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarServicios();
    document.getElementById('formulario-contacto').addEventListener('submit', validarFormulario);
});