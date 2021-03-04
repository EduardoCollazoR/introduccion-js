"use strict"; // correr js en modo estricto
//objetos

//
const producto = {
  nombreProducto: "monitor",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); // no permitir eliminar ni agregar o modificar elementos mientras .seal si permite modificar elementos

// producto.imagen = "imagen.jpg";

console.log(producto);
