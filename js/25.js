// foreach y map, se usan solo en arrelos
const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "monitor hd", precio: 300 },
  { nombre: "monitor 4k", precio: 200 },
  { nombre: "monitor hdq", precio: 100 },
];

//forEach
//enviar elementos a consola e imprimir
carrito.forEach((producto) => console.log(producto.precio));

// map
carrito.map((producto) => console.log(producto.precio));
// crear un nuevo arreglo en map
// se puede usar template strings
const arreglo = carrito.map((producto) => producto.precio);

console.log(arreglo);
