// Recorrer un array

const num = [`gasas`, `torundas`,` vendas`, `tensiometro`, `monitor` ];

//bucle con ciclo for
// for (i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

//El bucle forEach funcion callback( que s para cambiar de una funcion a otra)

num.forEach((num, index) => {
    console.log(`Índice: ${index}, Valor: ${num.toUpperCase()}`); 
    //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
});
//esta funcion ejecutara cada elemento

//link: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//link: https://www.freecodecamp.org/espanol/news/foreach-en-javascript-como-recorrer-un-arreglo-en-js/