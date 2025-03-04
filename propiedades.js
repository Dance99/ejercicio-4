// creo una propiedad, para crearla ingreso hasOwnProperty
const propiedad = {
    nombre: `Valentino`,
    edad: 20,
    objeto: `Portatil`
};

const name = propiedad.hasOwnProperty(`nombre`);
if (name) {
    console.log(`su nombre es ${propiedad.nombre}`);
} else {
    console.log(`su nombre no es ${propiedad.nombre}`);
}

const user = { nombre: `Valentino` };
console.log(`nombre:` in user);


class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Clase hija (subclase)
  class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
      super(nombre, edad); // Llama al constructor de la superclase
      this.carrera = carrera;
    }
  
    presentarse() {
      this.saludar();
      console.log(`Estudio ${this.carrera}.`);
    }
  }
  
  // Instancia de la subclase
  const estudiante = new Estudiante('Valentino', 20, 'Ingeniería');
  estudiante.presentarse();

//link: https://builtin.com/articles/javascript-check-if-object-has-property

//link: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes