let jugador1;
let jugador2;
let panelInicio;
let panelRondas;
let panelResultados = document.getElementById('resultados')
let rondas = 0;
let respuestas = [];
let ganadores = [];
let pGanJ1 = 0;
let pGanJ2 = 0;
let texto;

function iniciar() {

    //Capturamos nombre de jugador 
    jugador1 = document.getElementById('jugador1').value;
    jugador2 = document.getElementById('jugador2').value;

    // Cambiomos estilos de panel para mostrar u ocultar
    panelInicio = document.getElementById('inicio');
    panelRondas = document.getElementById('rondas');

    panelInicio.classList.remove('visible');
    panelInicio.classList.add('invisible');

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');

    // Cargar pnale de jugador 1
    document.getElementById('tituloJ1').innerText = `Es el turno de ${jugador1}`
    document.getElementById('tituloJ2').innerText = `Es el turno de ${jugador2}`

    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');

    //incremento contador de rondas
   
    rondas++;
    document.getElementById('contadorRonda').innerText = `Ronda nueva.`;
    
};

function seleccion(opcion, jugador) {

    respuestas.push(opcion);

    //Validamos en que jugador estamos
    if (jugador === 1) {
        document.getElementById('respuestaJ2').classList.remove('invisible');
        document.getElementById('respuestaJ2').classList.add('visible');
        document.getElementById('respuestaJ1').classList.remove('visible');
        document.getElementById('respuestaJ1').classList.add('invisible');
    } else {

        document.getElementById('respuestaJ2').classList.remove('visible');
        document.getElementById('respuestaJ2').classList.add('invisible');
        panelResultados.classList.remove('invisible');
        panelResultados.classList.add('visible');
        panelRondas.classList.remove('visible');
        panelRondas.classList.add('invisible');

        // EJECUTAMOS LA LOGICA DEL JUEGO
        let ganador = validarGanador(respuestas);

        if (rondas < 3) {
            document.getElementById('contadorRondasRes').innerText = `Resultado ronda #${rondas}`;
            document.getElementById('ganador').innerText = ganador[rondas - 1];
            rondas++;
        }
        else {
            document.getElementById('contadorRondasRes').innerText = `Resultado ronda #${rondas}`
            document.getElementById('ganador').innerText = ganador[rondas - 1];
            let H1 = document.createElement('h1');
            // let texto=document.createTextNode('');

            if (pGanJ1 > pGanJ2) {
                texto = document.createTextNode(`Felicidades ${jugador1} eres el ganador.`);
            } else if (pGanJ2 > pGanJ1) {
                texto = document.createTextNode(`Felicidades ${jugador2} eres el ganador.`);
            } else {
                texto = document.createTextNode('Esto es un empate!!');
            }

            H1.appendChild(texto);
            document.getElementById('resultados').appendChild(H1);


        }
    }


}

function validarGanador(respuestas) {
    //Validamos resultados
    //Jugador 1
    switch (respuestas[0]) {
        case 1: {                     //1=piedra
            if (respuestas[1] === 1) { //piedra vs piedra
                ganadores.push(`UFF!! Un Empate`);
            } else if (respuestas[1] === 2) {
                //Ganada jugador 2
                ganadores.push(`Gana ${jugador2}.`);
                pGanJ2++;
            } else {
                ganadores.push(`Gana ${jugador1}.`);
                pGanJ1++;
            }
            break;
        }
            
        case 2: {                   //2=papel

            if (respuestas[1] === 1) {
                //Gana jugador 1 papel vs piedra
                ganadores.push(`Gana ${jugador1}.`);
                pGanJ1++;
            } else if (respuestas[1] === 2) {
                //Ganada jugador empate
                ganadores.push(`UFF!! Un Empate`);
            } else {
                // ganajugador2 papel vs tijera
                ganadores.push(`Gana ${jugador2}.`);
                pGanJ2++;
            }
            break;
        }
            
        case 3: {                   //3=tijera
            if (respuestas[1] == 1) {
                //Gana jugador 2 tijera vs piedra
                ganadores.push(`Gana ${jugador2}.`);
                pGanJ2++;
            } else if (respuestas[1] === 2) {
                //Ganada jugador 1 tijera vs papel
                ganadores.push(`Gana ${jugador1}.`);
                pGanJ1++;
            } else {
                // empate
                ganadores.push(`UFF!! Un Empate`);
            }
            break;
        }
    }
    return ganadores;
}



function nuevaRonda() {

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');

    panelResultados.classList.remove('visible');
    panelResultados.classList.add('invisible');

    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');
    respuestas = [];
}