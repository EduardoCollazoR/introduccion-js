// clases
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `${this.nombre} precio de ${this.precio}`;
  }

  obtenerPrecio() {
    console.log(this.precio);
  }
}

const producto2 = new Producto("monitor curvo", 100);
const producto3 = new Producto("laptop curvo", 300);

//herencia
class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su ${this.isbn}`;
  }
  obtenerPrecio() {
    super.obtenerPrecio();
    console.log("si hay");
  }
}

const libro = new Libro("java", 34, "34243424");

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());
