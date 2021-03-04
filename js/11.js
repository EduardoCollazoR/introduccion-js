//objetos

//
const producto = {
  nombreProducto: "monitor",
  precio: 300,
  disponible: true,
};

//Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);

//destructuring
const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
