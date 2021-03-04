// arrows functions
// expresion de la funcion
const sumar2 = (n1, n2) => {
  console.log(n1 + n2);
};

sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo("JS");

//Array methods

const meses = ["enero", "febrero", "marzo"];
const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "monitor hd", precio: 300 },
  { nombre: "monitor 4k", precio: 200 },
  { nombre: "monitor hdq", precio: 100 },
];

//forEach

meses.forEach((mes) => {
  if (mes == "marzo") {
    console.log("marzo si existe");
  }
});

let resultado;

//some ideal para arreglo de objetos
resultado = carrito.some((producto) => producto.nombre === "celular");

// reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//filter

resultado = carrito.filter((producto) => producto.precio < 400);

resultado = carrito.filter((producto) => producto.nombre !== "monitor");
console.log(resultado);
