//Array methods

const meses = ["enero", "febrero", "marzo"];
const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "monitor hd", precio: 300 },
  { nombre: "monitor 4k", precio: 200 },
  { nombre: "monitor hdq", precio: 100 },
];

//forEach

meses.forEach(function (mes) {
  if (mes == "marzo") {
    console.log("marzo si existe");
  }
});

//includes
let resultado = meses.includes("marzo");

//some ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
  return producto.nombre === "celular";
});

// reduce
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

//filter

resultado = carrito.filter(function (producto) {
  return producto.precio < 400;
});

resultado = carrito.filter(function (producto) {
  return producto.nombre == "monitor";
});

console.log(resultado);
