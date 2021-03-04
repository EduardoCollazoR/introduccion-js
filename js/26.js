// palabra reservada this
// no funciona el arrow function, toma los valores de window, la ventana global
const reservacion = {
  nombre: "eduardo",
  apellido: "collazo",
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(`el cliente ${this.nombre} reservo y pagara ${this.total}`);
  },
};

const reservacion2 = {
  nombre: "edu",
  apellido: "collazo",
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(`el cliente ${this.nombre} reservo y pagara ${this.total}`);
  },
};
reservacion.informacion();
reservacion2.informacion();
