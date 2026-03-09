window.onscroll = function() {
    const boton = document.getElementById("boton-subir");
    if (boton) {
        if (document.documentElement.scrollTop > 200) {
            boton.classList.add("mostrar");
        } else {
            boton.classList.remove("mostrar");
        }
    }
};

function derrumbarYSubir() {
    const boton = document.getElementById("boton-subir");
    if (!boton) return;

    // Efecto de metal caliente
    boton.style.filter = "drop-shadow(0 0 20px #ff4500) brightness(1.5)";
    
    setTimeout(() => {
        boton.classList.add("derrumbe");
        
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);

        setTimeout(() => {
            boton.classList.remove("derrumbe");
            boton.style.filter = ""; 
        }, 1200);
    }, 200);
}