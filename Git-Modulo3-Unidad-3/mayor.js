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

document.write(`${mayor}`);