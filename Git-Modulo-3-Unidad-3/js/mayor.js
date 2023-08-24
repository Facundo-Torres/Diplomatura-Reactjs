
function encontrarMayor(arr) {
    return Math.max(...arr);
}

function mostrarMayor() {
    const inputNumeros = document.getElementById("numeros");
    const resultado = document.getElementById("resultado2");

    const numerosArray = inputNumeros.value.split(",").map(Number);
    const mayor = encontrarMayor(numerosArray);

    resultado.textContent = `El número mayor es: ${mayor}`;
}
