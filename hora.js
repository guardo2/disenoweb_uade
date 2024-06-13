document.addEventListener("DOMContentLoaded", function() {
    const tiempoArgentina = document.getElementById('tiempo-argentina');

    async function actualizarHora() {
        try {
            const respuesta = await fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
            if (!respuesta.ok) {
                throw new Error('Network response was not ok');
            }
            const datos = await respuesta.json();
            const horaArgentina = new Date(datos.datetime).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            tiempoArgentina.textContent = horaArgentina;
        } catch (error) {
            console.error('Error al obtener la hora:', error);
            tiempoArgentina.textContent = 'Error al cargar la hora';
        }
    }

    // Actualizar la hora inmediatamente y luego cada segundo
    actualizarHora();
    setInterval(actualizarHora, 1000);
});



