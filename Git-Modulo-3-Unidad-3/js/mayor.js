
function buscarMayor(arr) {
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }

    return mayor;
}

function mostrarMayor() {
    const inputNumeros = document.getElementById("numeros");
    const resultado = document.getElementById("resultado2");

    const numerosArray = inputNumeros.value.split(",");
    for (let i = 0; i < numerosArray.length; i++) {
        numerosArray[i] = parseFloat(numerosArray[i]);
    }

    const mayor = buscarMayor(numerosArray);

    resultado.textContent = `El número mayor es: ${mayor}`;
}