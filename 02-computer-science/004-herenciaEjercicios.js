/*2.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos, direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un método que regresa los metros cuadrados
    c. Un método debe regresar la direccion
    d. Un método debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
*/

class Construccion {
  constructor(numPuertas = 'Por definir', numVentanas = 'Por definir', numPisos = 'Por definir', direccion = 'Por definir', altura = 'Por definir', largoTerreno = 'Por definir', anchoTerreno = 'Por definir') {
    this.numPuertas = numPuertas
    this.numVentanas = numVentanas
    this.numPisos = numPisos
    this.direccion = direccion
    this.altura = altura
    this.largoTerreno = largoTerreno
    this.anchoTerreno = anchoTerreno
  }
  getDireccion() {
    return `La direccion del predio es: ${this.direccion}`
  }
  setDireccion(nuevaDireccion) {
    return this.direccion = nuevaDireccion;
  }
  metrosCuadrados() {
    let calcularMC = this.largoTerreno * this.anchoTerreno;

    return `La dimensión del terreno es: ${calcularMC} m2. `
  }
}
class Casa extends Construccion{
  constructor(){
    super().numPuertas = 8;
  }
}
// let cabaña = new Construccion (8,10,2,'Av. Sin nombre No.762', 2, 10, 5);
// console.log(cabaña);
// console.log(cabaña.getDireccion());
// cabaña.setDireccion('Av. Siempre Viva No. 742');
// console.log(cabaña.getDireccion());
// console.log(cabaña.metrosCuadrados());



/*
4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100

    5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.


    */

class Electrodomestico {
  constructor(precio, color) {
    this.precio = precio
    this.color = color
    this.consumoEnergetico = 100

  }
}

class Lavadora extends Electrodomestico {
  constructor(precio,color,cargaKG){
    super(precio,color)
      this.cargaKG = cargaKG
    }
  precioFinal() {
    let calcularPrecioFinal = this.cargaKG * this.consumoEnergetico;
    return `El precio final de este aparato es: ${calcularPrecioFinal}`
  }
}

let LavadoraLG = new Lavadora(8000, 'Grafito',15);
console.log(LavadoraLG);
console.log(LavadoraLG.precioFinal());

/*
3.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe tener el atributo 
    porcentajeAlcohol(%). 
    Crear los getters y setters correspondientes.

*/

class Bebida {
  constructor(cantidad){
    this.cantidad = cantidad
  }
  getCantidad(){
    return `El contenido de esta bebida es de ${this.cantidad} ml.`
  }
  setCantidad(nuevoContenido){
    return this.cantidad = nuevoContenido;
  }
}

class Refresco extends Bebida{
  constructor(cantidad, azucar){
  super(cantidad)
    this.azucar = azucar
  }
  getAzucar(){
    return `Esta bebida contiene ${this.azucar} g/l.`
  }
  setAzucar(nuevoAzucar){
    return this.alcohol = nuevoAzucar;
  }
}
class Cerveza extends Bebida{
  constructor(cantidad, alcohol){
  super(cantidad)
    this.alcohol = alcohol
  }
  getAlcohol(){
    return `Esta bebida contiene ${this.alcohol}% abv.`
  }
  setAlcohol(nuevoABV){
    return this.alcohol = nuevoABV;
  }
}
// let jarrito = new Refresco(355,100);
// console.log(jarrito);
// console.log(jarrito.getAzucar());
// let duff = new Cerveza (600, 5)
// console.log(duff);
// console.log(duff.getAlcohol());

/*
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos). 

El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.

Extra: (NO ES OBLIGATORIO)
Crear una clase de materias y que un profesor pueda tener varias materias
Hacer una clase grupo con un método para sacar el promedio del grupo

*/
class Maestro{//superclase, clase padre
  constructor(materia){
      this.materia = materia
      this.promedioGrupo
      this.calificaciones = []
      this.materiasAsignadas = [] 
  }
  
  asignarCalificaciones(...calificaciones){
      this.calificaciones = this.calificaciones.concat(calificaciones)
  }
  asignarMaterias(...materias){
    this.materiasAsignadas = this.materiasAsignadas.concat(this.materiasAsignadas);
  }
  
  calcularPromedio(){
      let suma = 0
      let promedio = 0
      for(let i = 0; i < this.calificaciones.length; i++){
          suma = suma + this.calificaciones[i]
      }
      this.promedioGrupo = suma / this.calificaciones.length
      return this.promedioGrupo
  }
}

class MaestroFisica extends Maestro{//subclase o clase hijo
  constructor(antiguedad){
      super("Física") //super().materia = "Física"
      this.antiguedad = antiguedad
  }
  
  saludar(){
      console.log("Hola soy maestro de " + this.materia)
  }
}

class MaestroMusica extends Maestro{//subclase o clase hijo
  constructor(edad){
      super("Música")
      this.edad = edad
  }
}

// let pedro = new MaestroFisica(10)
// let sofia = new MaestroMusica(29)
// pedro.asignarCalificaciones(10,8,9,2)
// pedro.calificaciones
// pedro.asignarCalificaciones(7,8)
// pedro.calificaciones
// console.log(pedro.calcularPromedio())
// pedro.saludar()