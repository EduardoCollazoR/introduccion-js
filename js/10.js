//objetos

//
const producto = {
  nombreProducto: "monitor",
  precio: 300,
  disponible: true,
};

//acceder a propiedades de los objetos
// console.log(producto.precio);

// console.log(producto["precio"]);

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//eliminar porpiedades
delete producto.disponible;

console.log(producto);
