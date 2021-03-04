// Arreglos - arrays
const numeros = [10, 20, 40];

// const arreglo = ["hola", 2, true, [1, 2, 3]];

//acceder a los valores de un arreglo
// console.log(numeros[2]);

//conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function (numero) {
//   console.log(numero);
// });

//agregar elementos al arreglo, push al final agrega y unshift al inicio
numeros.push(60); //al final

numeros.unshift(10, 20, 30); // al inicio

console.table(numeros);

//eliminar elementos del arreglo

const meses = ["enero", "febrero", "marzo"];

// meses.pop(); //elimina el ultimo elemento
// meses.shift(); //elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

//rest operator o spread operator
const nuevoArreglo = [...meses, "junio"]; //equivalente a push
// const nuevoArreglo = ["junio", ...meses]; //equivalente a unshift
console.log(nuevoArreglo);
