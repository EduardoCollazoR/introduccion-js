// declaracion de funcion
function sumar() {
  console.log(10 + 10);
}

sumar();

// expresion de la funcion
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

// iife sirve para no mezclar variables con otros archivos
(function () {
  console.log("esto es una funcion");
})();

// JS se ejecuta en dos etapas,1 de registro , 2 de ejecucion
