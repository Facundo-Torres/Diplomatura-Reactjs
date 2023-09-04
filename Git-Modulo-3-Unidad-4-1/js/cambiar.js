const cuadrados = document.querySelectorAll('.cuadrado');
const reset = document.getElementById('reset');

cuadrados.forEach((cuadrado, index) => {
    cuadrado.addEventListener('click', () => {
        // asi generamos un color aleatorio
        const randomColor = getRandomColor();
        
        // se cambia el color de fondo del cuadrado 
        cuadrado.style.backgroundColor = randomColor;
    });
});

// Fn para generar un color aleatorio en formato #RRGGBB
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // dígitos hexadecimales y letras para los colores
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
reset.addEventListener('click', () => {
    // Restaurar el color de fondo inicial de cada cuadrado
    cuadrados.forEach((cuadrado) => {
        cuadrado.style.backgroundColor = '#fff'; // Cambia esto al color inicial deseado
    });
});