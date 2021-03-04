//funciones con retorno de valores
// function sumar(n1, n2) {
//   return n1 + n2;
// }
// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(200);

console.log(total);
const totalApagar = calcularImpuesto(total);
console.log(`El total con impuesto es ${totalApagar}`);
