document.addEventListener("DOMContentLoaded", function() {
    const tiempoArgentina = document.getElementById('tiempo-argentina');

    function actualizarHoraLocal() {
        const opciones = {
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const horaArgentina = new Intl.DateTimeFormat('es-AR', opciones).format(new Date());
        tiempoArgentina.textContent = horaArgentina;
    }

    // Actualizar la hora inmediatamente y luego cada segundo
    actualizarHoraLocal();
    setInterval(actualizarHoraLocal, 1000);
});




