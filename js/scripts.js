// let nombre = prompt("Cual es tu nombre?");
// document.getElementById("mensaje").innerHTML = `Bienvenido ${nombre}`;

//funciones para Strings

let banda = "Metallica",
  cancion = "Enter Sadman";

let nombre;

nombre = banda + ": " + cancion;
//dice cuantas letras tiene una variable
console.log(banda.length);

//concat
nombre = nombre.concat("", "y es genial");

//todas mayus
nombre = nombre.toUpperCase();

//todas minus
nombre = nombre.toLowerCase();

//divide una cadena de texto

let actividad = "Aprendiendo JS";
nombre = actividad.split("");

let intereses = "Leer, caminar,musica";
nombre = intereses.split(",");

//reemplazar valor
nombre = actividad.replace("JS", "PHP");

//revisa que algo exista
nombre = actividad.includes("PHP");

let email = "correo@correo.com";
nombre = email.includes("@");

//repetir cadena de texto
let master = "Master ",
  puppets = "Of Puppets";

console.log(master.repeat(3));
console.log(puppets);

console.log(nombre);

//convirtiendo string a numero

// let numero1 = 50,
//   numero2 = "10",
//   numero3 = "tres",
//   numero4 = "20.20";

// console.log(Number(numero2) + numero1);
// console.log(parseInt(numero2) + numero1);
// console.log(parseFloat(numero4) + numero1);

let dato;
dato = Number("20");
dato = Number("20.20");
dato = Number(false);
dato = Number(true);

//parseint y parsefloat

dato = parseInt("100");
dato = parseFloat("20.23");

//to fixed

let numero1 = "123321.213321";
let numero2 = 232324.342432;

console.log(Number(numero1).toFixed(4));
console.log(numero2.toFixed(4));
// console.log(dato);

//convertir de numero a string

let num = 19898877;

let year = 1213;

// num = String(num);
// year = String(year);
//arreglo
num = String([1, 2, 3, 4]);

console.log(num.length);

//tipos de datos
//string
const nombreP = "Juan";
console.log(typeof nombreP);

//numero
const edad = 80;
console.log(typeof edad);

//boolean
let aprendiendoJS = true;
console.log(typeof aprendiendoJS);

//null
let hijos = null;
console.log(typeof hijos);

let nombreA;
console.log(typeof nombreA);

//arreglo
let lenguajes = ["HTML", "JS"];
console.log(typeof lenguajes);

//objeto
let personat = {
  nombre: "Juan",
  ciudad: "Mexico",
};
console.log(typeof personat);

//fecha
// let fecha = new Date();
// console.log(typeof fecha);

//new date = mes , dia y ano

// const unDia = new Date("1-5-1972");
// let valor;
// valor = unDia.getDate();

const diaHoy = new Date();
let valor = diaHoy;
//retorna el numero del mes 0 = enero
valor = diaHoy.getMonth();
//retorna el numero el dia 0 = domingo
valor = diaHoy.getDay();
//retorna el numero de dia del mes
valor = diaHoy.getDate();
//retorna el ano actual
valor = diaHoy.getFullYear();
valor = diaHoy.getFullYear(1998);
//minutos de la hora
valor = diaHoy.getMinutes();
//las horas del dia
valor = diaHoy.getHours();
//timestap
valor = diaHoy.getTime();

console.log(valor);

//ternario
let logueado = true;
console.log(logueado ? "si se logueo" : "no se logueo");

//otros iteradores
//arreglo
const pendientes = ["Tareas", "Comer", "Proyectos"];
//arreglo con objetos
const carrito = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Libro1" },
  { id: 3, producto: "Libro2" },
];

//objeto
let automovil = {
  modelo: "Camaro",
  motor: 6.0,
  anio: 1977,
  marca: "Chevrolet",
};

Object.keys(automovil).forEach((tarea) => {
  console.log(tarea);
});
Object.values(automovil).forEach((tarea) => {
  console.log(tarea);
});

let nuevoArreglo = pendientes.forEach((pendiente) => {
  //   console.log(pendiente);
});
let nuevoArreglo2 = pendientes.map((pendiente) => pendiente);

// console.log(nuevoArreglo2);

// for (let i = 0; i < pendientes.length; i++) {
//   console.log(pendientes[i]);
// }

// for (pendiente of pendientes) {
//   console.log(pendientes);
// }
// for (producto of carrito) {
//   console.log(producto.producto);
// }
// for (info of Object.values(automovil)) {
//   console.log(info);
// }

//scope
let musica = "Rock";

if (musica) {
  let musica = "Grunge";
  console.log("dentro del if " + musica);
}
console.log("fuera del If " + musica);

//destructuring
const cliente = {
  nombrec: "Alejandra",
  tipo: "Premium",
  datos: {
    ubicacion: {
      ciudad: "Mexico",
      pais: "Mexico",
    },
    cuenta: {
      desde: "10-12",
      saldo: 4000,
    },
  },
  gustos: {
    musica: ["Rock", "Trance"],
  },
};
console.log(cliente);

//crear la variable
//forma anterior
const nombreCliente = cliente.nombre,
  ubicacionCliente = cliente.ubicacion;

//forma nueva
let { nombrec, tipo } = cliente;
let {
  datos: {
    ubicacion: { ciudad },
  },
} = cliente;
console.log(ciudad);

// let { gustos: musica } = cliente;
// console.log(musica);

// console.log(tipo);

//object literal Enhacement

const bandaM = "Metallica",
  genero = "Heavy Metal",
  canciones = ["Seek &  Destroy", "Enter Sadman"];

//forma anterior de hacerlo

// const metallica = {
//   bandaM: bandaM,
//   genero: genero,
//   canciones: canciones,
// };

//forma nueva  de hacerlo
const metallica = {
  bandaM,
  genero,
  canciones,
};

console.log(metallica);

//filter
const personas = [
  { nombre: "Juan", edad: "34" },
  { nombre: "Leo", edad: "23" },
  { nombre: "Maria", edad: "13" },
  { nombre: "Luz", edad: "14" },
  { nombre: "Jorge", edad: "20" },
];

//obtener las personas mayores a 25 anios
const mayores = personas.filter((persona) => persona.edad > 25);

//extraer informacion de maria find
const maria = personas.find((persona) => persona.nombre === "Maria");

//reduce
let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

//fetch api
descargarUsuarios(30);
function descargarUsuarios(cantidad) {
  const api = `https://randomuser.me/api/?results=${cantidad}`;

  //llamado a fecht

  fetch(api)
    .then((respuesta) => respuesta.json())
    .then((datos) => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
  datos.forEach((usuario) => {
    const li = document.createElement("li");

    const {
      name: { firts },
      name: { last },
      picture: { medium },
      nat,
    } = usuario;
    li.innerHTML = `
        Nombre:${firts} ${last}
        Pais:${nat}
        Imagen:<img src="${medium}">
        `;

    document.querySelector("#app").appendChild(li);
  });
}
