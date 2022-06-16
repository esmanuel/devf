
let planilla = document.getElementById('planilla');

function generar() {
    let alumnos = Number(document.getElementById('alumnos').value);
    let notas = Number(document.getElementById('notas').value);

    // ciclo para crear filas
    for (let i = 1; i <= alumnos + 1; i++) {
        //validamos que la fila uno sea el encabezado
        let tr = document.createElement('tr');
        if (i === 1) {
            //ciclo uno para crear columnas
            for (let j = 1; j <= notas + 3; j++) {
                let th = document.createElement('th');
                let titulo;
                //esta es la comuna de orden
                if (j === 1) {
                    titulo = document.createTextNode('Orden');
                } else if (j === 2) { //columna estudiante
                    titulo = document.createTextNode('Estudiante');
                } else if (j === notas + 3) {//columna definitiva
                    titulo = document.createTextNode('Def');
                } else { //notas
                    titulo = document.createTextNode('Nota ' + (j - 2));
                }
                th.appendChild(titulo);
                tr.appendChild(th);
            }
            planilla.appendChild(tr);

        } else {

            //ciclo uno para crear columnas
            for (let j = 1; j <= notas + 3; j++) {
                let td = document.createElement('td');
                let elemento;
                //esta es la colmuna y fila de orden
                if (j === 1) {
                    elemento = document.createTextNode(i - 1);
                } else if (j === notas + 3) {//columna definitiva
                    elemento = document.createElement('span');
                } else { //notas
                    elemento = document.createElement('input');
                }
                td.appendChild(elemento);
                tr.appendChild(td);
            }
            planilla.appendChild(tr);

        }
    }
}

function calcular(){
    let promedio=
}