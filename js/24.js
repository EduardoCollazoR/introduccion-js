//for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`el numero ${i} es par`);
//   } else {
//     console.log(`el numero ${i} es impar`);
//   }
// }

const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "monitor hd", precio: 300 },
  { nombre: "monitor 4k", precio: 200 },
  { nombre: "monitor hdq", precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
  //   console.log(carrito[i].nombre);
}

//while loop
// revisa primero la condicion para ejecutar
// let i = 1; //indice
// while (i <= 100) {
//condicion

//   if (i % 2 === 0) {
//     console.log(`${i} es par`);
//   } else {
//     console.log(`${i} no es par`);
//   }

//   i++; // incremnto
// }

//do while loop
//entra al menos una vez al loop

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
