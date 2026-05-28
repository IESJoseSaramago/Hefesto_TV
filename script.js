window.addEventListener('scroll', function() {
    const boton = document.getElementById("boton-subir");
    
    // Solo si bajamos más de 100px, aparece
    if (window.scrollY > 100) {
        boton.classList.add("visible");
    } else {
        boton.classList.remove("visible");
    }
});

function derrumbarYSubir() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarNotificacionHermes() {
    const notif = document.getElementById('hermes-notificacion');
    const sonido = document.getElementById('sonido-hermes');
    
    // Aparece después de 3 segundos
    setTimeout(() => {
        if (notif) {
            notif.classList.add('visible');
            // El sonido solo suena si has hecho clic antes en la página (regla de navegadores)
            sonido.play().catch(e => console.log("Audio esperando interacción"));
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', mostrarNotificacionHermes);

