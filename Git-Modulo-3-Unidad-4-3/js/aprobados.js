var alumnos = [
    {
        nombre: 'Facundo TORRES',
        nota: 8
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];
//metodo filter() crea un nuevo array
var alumnosAprobados = alumnos.filter(function (alumno) {
    return alumno.nota >= 7;
});
var alumnosDesaprobados = alumnos.filter(function (alumno) {
    return alumno.nota < 7;
});

var aprobadosList = document.getElementById('aprobados-list');
var desaprobadosList = document.getElementById('desaprobados-list');
//fn para aprobados
alumnosAprobados.forEach(function (alumno) {
    var listItem = document.createElement('li');
    listItem.textContent = alumno.nombre + '  : ' + alumno.nota;
    aprobadosList.appendChild(listItem);
});
//fn para desaprobados
alumnosDesaprobados.forEach(function (alumno) {
    var listItem = document.createElement('li');
    listItem.textContent = alumno.nombre + '  : ' + alumno.nota;
    desaprobadosList.appendChild(listItem);

});
