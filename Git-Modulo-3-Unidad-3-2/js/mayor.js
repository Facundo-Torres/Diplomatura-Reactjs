
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


const num1 = parseInt(prompt('Ingrese un número:', ''));
const num2 = parseInt(prompt('Ingrese otro número:', ''));
const num3 = parseInt(prompt('Ingrese otro número:', ''));

if (num1 > num2 && num1 > num3) {
    document.write(`el mayor es el  ${num1}`);
} else if (num2 > num3) {
    document.write(`el mayor es el  ${num2}`);
} else {
    document.write(`el mayor es el  ${num3}`);
}


let continuar = true;
let numeros = [];

while (continuar) {
    const numero = parseInt(prompt('Ingrese un número:', ''));

    if (!isNaN(numero)) {
        numeros.push(numero);
        const respuesta = prompt('¿Desea agregar otro número? (si/no)').toLowerCase();
        continuar = respuesta === 'si';
    } else {
        alert('Debe ingresar un número válido.');
    }
}

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

document.write(`El mayor es ${mayor}`);