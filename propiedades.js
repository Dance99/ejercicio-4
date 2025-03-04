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

//link: https://builtin.com/articles/javascript-check-if-object-has-property