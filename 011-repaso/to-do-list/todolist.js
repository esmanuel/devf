
document.getElementById('agregar').addEventListener('click',crearElementoLista);

function generarLista(texto){
    document.getElementById('listGroup').innerHTML += `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" aria-label="...">${texto}</li>`;
}

function crearElementoLista(){
    
const value=document.querySelector('#tarea').value;

generarLista(value);
}


const tareas = [
    {
      id: i,
      texto: "",
      estaCompletada: false,
    },
    {
      id: i,
      texto: "",
      estaCompletada: false,
    },
  ]

