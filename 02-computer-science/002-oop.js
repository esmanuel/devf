class Alumno {
    constructor(nombre, apellido, caliFinal, inscrito, calificacion){
    this.nombre = nombre
    this.apellido = apellido
    this.caliFinal = caliFinal
    this.inscrito = inscrito
    this.calificacion = calificacion
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
    
  }

}
let homero = new Alumno ('Homero', 'Simpson', 7.0, true);
// console.log(homero);
// console.log(homero.ObtenerNombreCompleto());
// console.log(homero.Aprobado());
// console.log(homero.InicialesDeAlumno());