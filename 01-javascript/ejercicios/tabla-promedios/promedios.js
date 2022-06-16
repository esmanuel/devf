let alumnos;
let notas;
let planilla = document.getElementById('planilla');

function generar() {
    alumnos = Number(document.getElementById('alumnos').value);
    notas = Number(document.getElementById('notas').value);

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
                    elemento.setAttribute('id', 'p' + (i - 1));
                } else { //notas
                    elemento = document.createElement('input');
                    elemento.setAttribute('id', 'n' + (j - 2) + 'e' + (i - 1));
                }
                td.appendChild(elemento);
                tr.appendChild(td);
            }
            planilla.appendChild(tr);

        }
    }
}

//creamos funcion para generar promedio
function calcular() {
    let sumaGeneral = 0;
    let promedioGeneral;

    alumnos = Number(document.getElementById('alumnos').value);
    notas = Number(document.getElementById('notas').value);
    //Leemos estudiantes en la tabla
    for (let i = 2; i <= alumnos + 1; i++) {
        let suma = 0;
        let promedio = 0;
        //leemos notas de estudiante en cada fila
        for (let j = 3; j <= notas + 3; j++) {
            if (j === notas + 3) {
                //calculamos el promedio
                promedio = suma / notas;
                //suma general
                sumaGeneral = sumaGeneral + promedio;

                document.getElementById('p' + (i - 1)).innerText = promedio;
            }else{
                suma = suma + Number(document.getElementById('n' + (j - 2) + 'e' + (i - 1)).value);
            }
        }
    }
    promedioGeneral=sumaGeneral/alumnos;
    document.getElementById('promedioGeneral').innerText = `El promedio general del grupo es ${parseInt(promedioGeneral)}`;

}