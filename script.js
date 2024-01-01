document.addEventListener('DOMContentLoaded', (event) => {
    console.log('El DOM está completamente cargado y analizado');
});

    
const sliderContainer = document.getElementById('slider-container');
let position = 0; // Posición inicial del slider
const step = 15; // Cantidad de píxeles que se moverá el slider en cada paso
const delay = 100; // Retraso entre cada paso (en milisegundos)

function moveSlider() {
    position -= step; // Mueve el slider hacia la izquierda
    if (position < -sliderContainer.clientWidth) {
        position = 0; // Reinicia el slider cuando llega al final
    }
    sliderContainer.style.transform = `translateX(${position}px)`;
}

// Iniciar la animación del slider
setInterval(moveSlider, delay);