const number = [ 10,20,30,40];

//ciclo forEach
number.forEach((number, index) => {
    const cuadrado = Math.pow(number, 2);
    console.log(`El elemento en la posición 0 ${index} tiene el valor ${number}  y su valor al cuadrado es ${cuadrado}`);
});

//link:https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/
//link: https://www.freecodecamp.org/espanol/news/foreach-en-javascript-como-recorrer-un-arreglo-en-js/