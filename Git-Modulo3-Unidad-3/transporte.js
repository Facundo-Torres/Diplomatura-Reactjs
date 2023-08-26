function verMedioTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "Ir a pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "Usar la bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "Tomar el colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "Ir en auto";
    } else {
        return "Tomar un avion";
    }
}

function mostrarResultado() {
    const distanciaInput = document.getElementById("distancia");
    const resultado = document.getElementById("resultado");

    const distancia = parseFloat(distanciaInput.value);
    if (!isNaN(distancia)) {
        const medioTransporte = verMedioTransporte(distancia);
        resultado.textContent = `Se recomienda: ${medioTransporte}`;
    } else {
        resultado.textContent = "Por favor, ingrese distancia válida.";
    }
}