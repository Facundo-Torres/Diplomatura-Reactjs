const textarea = document.getElementById('miTextarea');
const contador = document.getElementById('contador');

// fn p/actualizar el contador de caracteres
function actualizarContador() {
    const caracteresIngresados = textarea.value.length;
    contador.textContent = caracteresIngresados;
}

textarea.addEventListener('input', actualizarContador);

// Llama a la función inicialmente 
actualizarContador();
