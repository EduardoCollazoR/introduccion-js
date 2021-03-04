//poo

//object literal
const producto = {
  nombre: "tablet",
  precio: 500,
};

//object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

//prototype crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.fomatearProducto = function () {
  return `${this.nombre} precio de ${this.precio}`;
};

const producto2 = new Producto("monitor curvo", 100);
const producto3 = new Producto("laptop curvo", 300);

console.log(producto2.fomatearProducto());
console.log(producto3.fomatearProducto());
