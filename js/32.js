// async / await
function descargarNuevos() {
  return new Promise((resolve) => {
    console.log("descargando clientes");

    setTimeout(() => {
      resolve("los clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimos() {
  return new Promise((resolve) => {
    console.log("descargando pedidos");

    setTimeout(() => {
      resolve("los pedidos fueron descargados");
    }, 3000);
  });
}

// setTimeout(function(){
// console.log('time..');
// },5000);

// setInterval(function(){
//     console.log('time..');
//     },5000);

async function app() {
  console.log("app lista");

  try {
    // const clientes = await descargarNuevos();
    // const pedidos = await descargarUltimos();
    // console.log(clientes);
    // console.log(pedidos);
    // console.log("este codigo si se bloquea");

    const resultado = await Promise.all([
      descargarNuevos(),
      descargarUltimos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}
app();
