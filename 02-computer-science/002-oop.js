

class Alumno {
    constructor(nombre, apellido, caliFinal, inscrito, calificaciones){
    this.nombre = nombre;
    this.apellido = apellido;
    this.caliFinal = caliFinal;
    this.inscrito = inscrito;
    this.calificaciones = [];
  }
  InicialesDeAlumno(){
    let letrasNombre = this.nombre.split('');
    let letrasApellido = this.apellido.split('');
    
    return console.log(`Las iniciales del alumno son: ${letrasNombre.shift()} ${letrasApellido.shift()}.`);
  }

  ObtenerNombreCompleto = () => `${this.nombre} ${this.apellido}`;
  
  Aprobado(){
    if(this.caliFinal < 6){
      return `${this.nombre} NO ha aprobado.`
    } else {
      return `${this.nombre} está aprobado.`
    };
  };

  agregarCalificación(materia, promedio){
    this.calificaciones.push(promedio);

  }
  

  obtenerPromedio(){
    let suma = 0;
    for(let i = 0; i < this.calificaciones.length; i++){
      suma = suma + this.calificaciones[i];

    }
    return suma/this.calificaciones.length
  }

}
let homero = new Alumno ('Homero', 'Simpson', 7.0, true);
console.log(homero);
console.log(homero.ObtenerNombreCompleto());
console.log(homero.Aprobado());
console.log(homero.InicialesDeAlumno());
homero.agregarCalificación('Español', 9);
homero.agregarCalificación('Lógica', 5);
homero.agregarCalificación('Matematicas', 7);
console.log(homero.obtenerPromedio())

// EJEMPLO CLASE https://runkit.com/mackaber/62c779064b413a00083e8046